import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post<any>(url, data);
  }
}
