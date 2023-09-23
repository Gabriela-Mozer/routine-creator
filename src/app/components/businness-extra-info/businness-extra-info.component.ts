import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DataSavingService } from 'src/app/services/data-saving.service';

@Component({
  selector: 'app-businness-extra-info',
  templateUrl: './businness-extra-info.component.html',
  styleUrls: ['./businness-extra-info.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BusinnessExtraInfoComponent implements OnInit {
   job: string;
  
    constructor(private dataSavingService: DataSavingService){
      this.job = '';
    }
 
  ngOnInit(): void {
    console.log('Lubie Placki');
  }
   saveTextArea() {
    this.dataSavingService.saveTextAreaData(this.job);
    console.log(this.job);
   }
}
