import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DataSavingService } from 'src/app/services/data-saving.service';

@Component({
  selector: 'app-both-user-info',
  templateUrl: './both-user-info.component.html',
  styleUrls: ['./both-user-info.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BothUserInfoComponent {
  formData: any;
  clickedInput: string = '';
  clickedOption: string = '';
  clickedButton: string = '';
  clickedSecondButton: string ='';
  constructor(private dataSavingService: DataSavingService) {
    this.formData = {
      checkboxesBothData: {
        yes: false,
        yesGroup: false,
        no: false,
      },
    };
  }
  onClickedButton(buttonName: string) {
    this.dataSavingService.saveDataButton(buttonName);
    this.clickedButton = this.dataSavingService.getSelectedButton();
  }
  onClickedSecondButton(buttonName: string) {
    this.dataSavingService.saveDataButton(buttonName);
    this.clickedSecondButton = this.dataSavingService.getSelectedButton();

  }
  onInputClick(inputName: string) {
    this.clickedInput = inputName;
  }

  onOptionClick(option: string) {
    this.clickedOption = option;
    this.formData.checkboxesBothData = this.clickedOption;
  }

  getImgPath(inputName:string): string {
    if(inputName === 'yes') {
      return this.clickedInput === 'yes'? '../../../assets/chat-filled.svg' : '../../../assets/single-chat.svg';
    }
    if(inputName === 'yes-group') {
      return this.clickedInput === 'yes-group' ? '../../../assets/chat-group-filled.svg' : '../../../assets/group-chat.svg';
    }
    if(inputName ==='no') {
      return this.clickedInput === 'no' ? '../../../assets/no-chat-filled.svg' : '../../../assets/no-chat.svg';
    }
    return '';
  }
  
areSecondGroupSelected(): boolean {
  return (
    this.clickedSecondButton !== '' &&
    (this.clickedSecondButton === 'looking-button' || this.clickedSecondButton === 'student-button' || this.clickedSecondButton === 'hired-button')
  )
}
  areFieldSelected():  boolean {
    return (
      (this.clickedButton === 'time-button' || this.clickedButton === 'share-button' || this.clickedButton === 'self-button') &&
      (this.clickedInput !== '' || this.clickedOption !== '') &&
      this.areSecondGroupSelected()
     );
   }
   onSubmit(): void {
    this.dataSavingService.saveData(this.formData.checkboxesBothData);
    this.dataSavingService.getSelectedButton();
   }
  }

