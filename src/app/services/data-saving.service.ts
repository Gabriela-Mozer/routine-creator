import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataSavingService {
  formData: any = {
    checkboxesBusinessData: {
      yes: false,
      yesGroup: false,
      no: false,
    },
    checkboxesPersonalData: {
      yes: false,
      yesGroup: false,
      no: false,
    },
  };
  clickedButton: string = '';

  constructor(private http: HttpClient) {}

  saveData(formData: any): void {
    this.formData = formData;
  }

  getFormData(): any {
    return this.formData;
  }

  saveDataButton(choosenButton: string): any {
    this.clickedButton = choosenButton;
  }

  getSelectedButton(): string {
    return this.clickedButton;
  }
}
