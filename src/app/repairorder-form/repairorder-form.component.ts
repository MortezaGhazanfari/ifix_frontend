import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepairorderService } from '../repairorder.service';

@Component({
  selector: 'app-repairorder-form',
  templateUrl: './repairorder-form.component.html',
  styleUrls: ['./repairorder-form.component.scss']
})
export class RepairorderFormComponent {
  repairForm: FormGroup;

  constructor(private fb: FormBuilder, private repairOrderService: RepairorderService) {
    this.repairForm = this.fb.group({
      name: [''],
      adresse: [''],
      telefon: [''],
      email: [''],
      typ: [''],
      modell: [''],
      imei: [''],
      pin: [''],
      fehlerbeschreibung: [''],
      bemerkung: [''],
      kostenvoranschlag: [0],
      reparaturfreigabe: [0],
      gesamtkosten: [0],
      anzahlung: [0]
    });
  }

  onSubmit() {
    if (this.repairForm.valid) {
      this.repairOrderService.fillPdf(this.repairForm.value).subscribe(response => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'repairorder.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      });
    }
  }
}
