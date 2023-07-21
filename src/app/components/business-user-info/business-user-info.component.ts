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
  constructor(private router: Router, private dataSvingService: DataSavingService) {
  }
  ngOnInit(): void {
   this.formData = this.dataSvingService.getFormData();
   console.log(this.formData);
  }
}


