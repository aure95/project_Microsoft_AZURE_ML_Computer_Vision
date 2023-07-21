import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.example.com'; // Replace with your API URL
  private api="http://localhost:8000";

  constructor(private http: HttpClient) { }

  uploadImage(files: any){
    const formData: FormData = new FormData();
    for (const file of files) {
      formData.append('files', file);
    }
    console.log(formData.getAll("files"))
    return this.http.post(`${this.api}/upload/pictures/`, formData);
  }

  searchImages(criteria: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/images-test?filter=${criteria}`);
  }

  updateImageProperties(image: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/images-test/${image.id}`, image);
  }

  deleteImage(imageId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/images-test/${imageId}`);
  }
}
