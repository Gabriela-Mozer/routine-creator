import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

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
    selectedLabels: [],
  };
  clickedButton: string = '';
  textareaData: string = '';

  private businessExtraInfoLabelsSubject = new BehaviorSubject<string[]>([]);
  private savedLabelsSubject = new BehaviorSubject<string[]>([]);
  savedLabels$ = this.savedLabelsSubject.asObservable()
  constructor(private http: HttpClient) {}

  saveData(formData: any): void {
    this.formData = formData;
  }
  saveBusinessExtraInfoLabels(labels: string[]): void {
    this.formData.selectedLabels = labels;
    this.businessExtraInfoLabelsSubject.next(labels);
  }
  saveDataFromExtraBussinessLabels(selectedLabels: string[]): void {
    this.formData.selectedLabels = selectedLabels;
    this.savedLabelsSubject.next(selectedLabels);
    console.log(selectedLabels);
  }

  getSavedLabels() : string[] {
    return this.formData.selectedLabels;
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
