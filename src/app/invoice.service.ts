import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface PdfRequestData {
  position0: number;
  position1: number;
  position2: number;
  anzahl0: number;
  anzahl1: number;
  anzahl2: number;
  bezeichnung0: string;
  bezeichnung1: string;
  bezeichnung2: string;
  einzelpreis0: number;
  einzelpreis1: number;
  einzelpreis2: number;
  anzahlung: number;
  kundenname: string;
  email: string;
  telefon: string;
}


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = 'http://localhost:8080/api/pdf/fill';

  constructor(private http: HttpClient) { }

  fillPdf(requestData: PdfRequestData): Observable<Blob> {
    return this.http.post(this.apiUrl, requestData, { responseType: 'blob' });
  }
}
