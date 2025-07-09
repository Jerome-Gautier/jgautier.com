import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://jgautier.com/api/contact';

  constructor(private http: HttpClient) {}

  sendContactForm(formData: ContactFormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}