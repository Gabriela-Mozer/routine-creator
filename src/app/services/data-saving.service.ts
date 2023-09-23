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
    checkboxesBothData: {
      yes: false,
      yesGroup: false,
      no: false,
    },
  };
  clickedButton: string = '';
  textareaData: string = '';

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
  
  saveTextAreaData(textarea: string) : void {
    this.textareaData = textarea;
  }

  getTextAreaData(): string {
    return this.textareaData;
  }
}
