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
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-businness-extra-info',
  templateUrl: './businness-extra-info.component.html',
  styleUrls: ['./businness-extra-info.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BusinnessExtraInfoComponent implements OnInit {
  job: string;
  //checkboxLabels: Object;
  maxSelections: number;
  selectedOptions: number;
  clickForm: FormGroup;
  formDisabled: boolean;
  clickedOption: string;
  isLimitInformation: boolean;
  checkboxImages: SafeUrl[];
  checkboxLabels: any;

  constructor(
    private dataSavingService: DataSavingService,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer
  ) {
    this.job = '';
    this.checkboxLabels = [
      { label: 'travel', imageSrc: '../../../assets/flight.svg' },
      { label: 'music', imageSrc: '../../../assets/music.svg' },
      { label: 'parties/events', imageSrc: '../../../assets/party.svg' },
      { label: 'sport', imageSrc: '../../../assets/run.svg' },
      { label: 'books', imageSrc: '../../../assets/auto_stories.svg' },
      { label: 'technology', imageSrc: '../../../assets/devices.svg' },
      { label: 'gym', imageSrc: '../../../assets/gym.svg' },
      { label: 'others', imageSrc: '../../../assets/question.svg' },
    ];
    this.formDisabled = false;
    this.maxSelections = 3;
    this.selectedOptions = 0;
    this.clickedOption = '';
    this.isLimitInformation = false;
    this.checkboxImages = [ 
      '../../../assets/flight.svg',
      '../../../assets/music.svg',
      '../../../assets/party.svg',
      '../../../assets/run.svg',
      '../../../assets/auto_stories.svg',
      '../../../assets/devices.svg',
      '../../../assets/gym.svg',
      '../../../assets/question.svg'  
    ]

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
        const maxOptionsSelected =
          this.arrayControls.filter((checkbox) => checkbox.value).length ===
          this.maxSelections;
        if (maxOptionsSelected !== this.formDisabled) {
          this.toggleControlDisableState(maxOptionsSelected);
        }
      },
    });
    this.dataSavingService.savedLabels$.subscribe((labels) => {
      console.log(
        'Selected Labels after saving:',
        this.dataSavingService.getSavedLabels()
      );
    });
  }

  get arrayControls() {
    return (this.clickForm.get('myArray') as FormArray).controls;
  }

  toggleControlDisableState(state: boolean): void {
    this.formDisabled = state;
    this.arrayControls
      .filter((checkbox) => !checkbox.value)
      .forEach((checkbox) => (state ? checkbox.disable() : checkbox.enable()));
  }

  saveTextArea() {
    this.dataSavingService.saveTextAreaData(this.job);
    console.log(this.job);
  }

  onSubmit(): void {
    const selectedLabels: string[] = [];
    this.arrayControls.forEach((checkbox, index) => {
      if (checkbox.value) {
        selectedLabels.push(this.checkboxLabels[index]);
      }
    });
    if (selectedLabels.length > this.maxSelections) {
      this.isLimitInformation = true;
      console.log(this.isLimitInformation);
    } else {
      this.isLimitInformation = false;
      this.dataSavingService.saveDataFromExtraBussinessLabels(selectedLabels);
    }
  }

}
