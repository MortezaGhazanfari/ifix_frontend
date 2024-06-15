import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PdfRequestData {
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

  fillPdf(requestData: PdfRequestData ): Observable<HttpResponse<Blob>> {
    return this.http.post<Blob>(this.apiUrl, requestData, { observe: 'response', responseType: 'blob' as 'json' });
  }
}
