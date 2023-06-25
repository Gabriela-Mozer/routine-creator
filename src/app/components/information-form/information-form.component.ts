import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DataSavingService } from 'src/app/services/data-saving.service';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InformationFormComponent implements OnInit {
  name: string;
  userName: string;
  isCheckboxSelected: string = '';
  form!: FormGroup;

  constructor(private router: Router,
    private dataSavingService: DataSavingService,
    private formBuilder: FormBuilder) {
    this.name = '';
    this.userName = '';
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      isCheckboxSelected: ['', Validators.required],
    });
  }

  onSubmit():void {
    if (this.form.valid && this.isCheckboxSelected) {
      const formData = {
        name: this.form.value.name,
        userName: this.form.value.userName
      };
      this.dataSavingService.saveData(formData);
      console.log('Bitch', formData);
    }
  }

  onCheckboxSelected(value: string): void {
    this.isCheckboxSelected = value;
   // this.form.patchValue({ isCheckboxSelected: value });
  }

  navigateToProfile(formData: any){
    this.router.navigate(['app-profile-page', formData])

  }
}

//!! dodanie przed wartościami, których typem jest string powoduje, że
// typ zmienia się na boolean
