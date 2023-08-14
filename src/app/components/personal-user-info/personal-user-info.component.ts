import { Component, ViewEncapsulation } from '@angular/core';
import { DataSavingService } from 'src/app/services/data-saving.service';

@Component({
  selector: 'app-personal-user-info',
  templateUrl: './personal-user-info.component.html',
  styleUrls: ['./personal-user-info.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PersonalUserInfoComponent {
  formData: any;
  clickedInput: string = '';
  clickedOption: string= '';
  clickedButton: string = '';
  constructor(private dataSavingService: DataSavingService) {
    this.formData = {
      checkboxesPersonalData: {
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

   getImgPath(inputName: string): string {
    if(inputName === 'yes') {
      return this.clickedInput === 'yes' ? '../../../assets/chat-filled.svg' : '../../../assets/single-chat.svg';
    }
    if(inputName ==='yes-group') {
      return this.clickedInput === 'yes-group' ? '../../../assets/chat-group-filled.svg' : '../../../assets/group-chat.svg';
    }
    if(inputName ==='no') {
      return this.clickedInput === 'no' ? '../../../assets/no-chat-filled.svg' : '../../../assets/no-chat.svg';
    }
    return '';
  }
  
  onInputClick(inputName: string) {
    this.clickedInput = inputName;
  }

  onOptionClick(option: string) {
    this.clickedOption = option;
    this.formData.checkboxesPersonalData = this.clickedOption;    
   }

   areFieldSelected(): boolean {
    return (
     (this.clickedButton !== '') &&
     (this.clickedInput !== '' || this.clickedOption !== '')
     &&(this.clickedButton === 'time-button' || this.clickedButton === 'share-button' || this.clickedButton === 'self-button')
    );
  }
  
  onSubmit(): void {
    this.dataSavingService.saveData(this.formData.checkboxesPersonalData);
    this.dataSavingService.getSelectedButton();
   }
}
