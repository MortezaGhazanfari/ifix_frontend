import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RepairorderService {

  private apiUrl = 'http://localhost:8080/api/repairOrder/fill';

  constructor(private http: HttpClient) { }

  fillPdf(repairOrderData: any): Observable<Blob> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, repairOrderData, { headers, responseType: 'blob' });
  }
}
