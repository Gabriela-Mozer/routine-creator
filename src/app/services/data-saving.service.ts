import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataSavingService {
  formData: any;

  constructor(private http: HttpClient) {
    
   }

   saveData(formData: any): void{
    this.formData = formData;
   }
   
   getFormData():any{
    return this.formData;
   }
 
}
