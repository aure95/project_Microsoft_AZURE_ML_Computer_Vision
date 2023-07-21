import { ApiService } from './../../api.service';
import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder } from '@angular/forms';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-form-picture-upload',
  templateUrl: './form-picture-upload.component.html',
  styleUrls: ['./form-picture-upload.component.css'],
  imports: [MatChipsModule, MatSelectModule, ReactiveFormsModule, MatIconModule]
})
export class FormPictureUploadComponent {

  files: any = []

  uploadForm = new FormGroup({
    file: new FormControl(''),
  });

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {


  }




  onFileChange(event:any) {
    this.files = event.target.files;
  }

  onSubmit(): void {
    if (this.files.length === 0) {
      console.log('Vide');
      return;
    }else{
    this.apiService.uploadImage(this.files)
    }
  }





}
