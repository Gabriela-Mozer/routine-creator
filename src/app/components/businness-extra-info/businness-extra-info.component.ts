import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DataSavingService } from 'src/app/services/data-saving.service';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-businness-extra-info',
  templateUrl: './businness-extra-info.component.html',
  styleUrls: ['./businness-extra-info.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BusinnessExtraInfoComponent implements OnInit {
  job: string;
  checkboxLabels : string[];
  maxSelections: number;
  selectedOptions: number;
  clickForm: FormGroup;
  formDisabled: boolean;

  constructor(
    private dataSavingService: DataSavingService,
    private formBuilder: FormBuilder
  ) {
    this.job = '';
    this.checkboxLabels = [
      'travel',
      'music',
      'parties/events',
      'sport',
      'books',
      'technology',
      'gym',
      'others',
    ];
    this.formDisabled = false;
    this.maxSelections = 3;
    this.selectedOptions = 0
  


  
    this.clickForm = new FormGroup({
      myArray: new FormArray([
        new FormControl({ value: false, disabled: false }),
        new FormControl({ value: false, disabled: false }),
        new FormControl({ value: false, disabled: false }),
        new FormControl({ value: false, disabled: false }),
        new FormControl({ value: false, disabled: false }),
        new FormControl({ value: false, disabled: false }),
        new FormControl({ value: false, disabled: false }),
        new FormControl({ value: false, disabled: false }),
      ]),
    });
  }

  
  ngOnInit(): void {
   this.clickForm.valueChanges.subscribe({
    next: () => {
      const maxOptionsSelected = this.arrayControls.filter((checkbox) =>
      checkbox.value).length === this.maxSelections;
      if(maxOptionsSelected !== this.formDisabled) {
        this.toggleControlDisableState(maxOptionsSelected);
      }
    },
   });
  }
 
  get arrayControls() {
    return (this.clickForm.get('myArray') as FormArray).controls;
  }

  toggleControlDisableState(state: boolean): void {
    this.formDisabled = state;
    this.arrayControls.filter((checkbox) => !checkbox.value).forEach(
      (checkbox) => (state ? checkbox.disable(): checkbox.enable())
    )
  }

  saveTextArea() {
    this.dataSavingService.saveTextAreaData(this.job);
    console.log(this.job);
  }

  
}
