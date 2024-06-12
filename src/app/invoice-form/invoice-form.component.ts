import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvoiceService, PdfRequestData } from '../invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.scss'
})
export class InvoiceFormComponent {
  invoiceForm: FormGroup;

  constructor(private fb: FormBuilder, private invoiceService: InvoiceService) {
    this.invoiceForm = this.fb.group({
      anzahl0: [0, Validators.required],
      anzahl1: [0, Validators.required],
      anzahl2: [0, Validators.required],
      bezeichnung0: ['', Validators.required],
      bezeichnung1: ['', Validators.required],
      bezeichnung2: ['', Validators.required],
      einzelpreis0: [0, Validators.required],
      einzelpreis1: [0, Validators.required],
      einzelpreis2: [0, Validators.required],
      anzahlung: [0, Validators.required],
      kundenname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefon: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.invoiceForm.valid) {
      const requestData: PdfRequestData = this.invoiceForm.value;
      this.invoiceService.fillPdf(requestData).subscribe(response => {
        if (response.body) {
          const blob = response.body;
          let filename = 'invoice.pdf';
          const contentDisposition = response.headers.get('content-disposition');
          if (contentDisposition) {
            const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
            const matches = filenameRegex.exec(contentDisposition);
            if (matches && matches[1]) {
              filename = decodeURIComponent(matches[1].replace(/["']/g, ''));
            }
          }
          const currentDate = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\./g, '');
          filename = `invoice_${requestData.kundenname.replace(' ', '_')}_${currentDate}.pdf`;

          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        } else {
          console.error('No PDF content available.');
        }
      }, error => {
        console.error('Error generating PDF:', error);
      });
    }
  }}
