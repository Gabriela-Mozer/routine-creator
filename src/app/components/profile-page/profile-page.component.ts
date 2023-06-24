import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute
 } from '@angular/router';
import { DataSavingService } from 'src/app/services/data-saving.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProfilePageComponent {

  formData: any;

  constructor(private route: ActivatedRoute){}
  ngOnInit(): void{
    this.route.params.subscribe(params =>{
      this.formData = params;
    })
  }

}
