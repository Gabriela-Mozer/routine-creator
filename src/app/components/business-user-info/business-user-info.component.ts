import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSavingService } from 'src/app/services/data-saving.service';

@Component({
  selector: 'app-business-user-info',
  templateUrl: './business-user-info.component.html',
  styleUrls: ['./business-user-info.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BusinessUserInfoComponent implements OnInit{
  formData: any;
  clickedInput: string = '';
  clickedOption: string = ''; 
  clickedButton: string = '';

  constructor(private router: Router, private dataSvingService: DataSavingService) {
  }
  ngOnInit(): void {
   this.formData = this.dataSvingService.getFormData();
   console.log(this.formData);
  }

  onInputClick(inputName: string) {
    this.clickedInput = inputName;
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

 onOptionClick(option: string) {
  this.clickedOption = option;
 }

 onClickedButton(buttonName: string) {
  this.clickedButton = buttonName;
 }
}


