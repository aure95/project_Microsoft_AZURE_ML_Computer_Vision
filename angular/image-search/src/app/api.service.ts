import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError} from "rxjs";
import { environment } from "../environments/environment";
import { Photo } from "../app/components/model/photo";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.example.com'; // Replace with your API URL
  private api="http://localhost:8000";

  /**
   *   API_URL:"http://127.0.0.1:8000/",
   *   PHOTO_URL:"blobs/pictures/paths/",
   *   UPLOAD_URL:"upload/pictures/",
   *   CPU_VIS:"computer-vision/analyze/"
   *
   */


  constructor(private httpClient: HttpClient) {
    console.log(environment);
  }

   photo:Photo[]= [];

  uploadImage(files: any){
    const formData: FormData = new FormData();
    for (const file of files) {
      formData.append('files', file);
    }
    console.log(formData.getAll("files"))
    return this.httpClient.post(`${this.api}/upload/pictures/`, formData);
  }

  // getPhotos():Observable<Photo[]> {
  //  // return this.http.get<Photo>(environment.API_URL + environment.PHOTO_URL + `20`);
  //   return this.httpClient.get<Photo[]>(`http://127.0.0.1:8000/` + `blobs/pictures/paths/`+`20`);
  // }
  getPhoto(){
    return this.httpClient.get<Photo[]>(`http://127.0.0.1:8000/` + `blobs/pictures/paths/`+`20`);
  }
  /**
   *  getBookInfos(): Observable<BookList> {
   *     return this.http.get<BookList>(this.url);
   *   }
   * @param criteria
   */

  searchImages(criteria: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/images-test?filter=${criteria}`);
  }

  updateImageProperties(image: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/images-test/${image.id}`, image);
  }

  deleteImage(imageId: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/images-test/${imageId}`);
  }
}
