import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.scss'
})
export class InvoiceFormComponent {
  invoiceForm: FormGroup;

  constructor(private fb: FormBuilder, private invoiceService: InvoiceService) {
    this.invoiceForm = this.fb.group({
      position0: [0, Validators.required],
      position1: [0, Validators.required],
      position2: [0, Validators.required],
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
      this.invoiceService.fillPdf(this.invoiceForm.value).subscribe(response => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      });
    }
  }
}
