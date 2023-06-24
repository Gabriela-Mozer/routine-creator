import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent {
 constructor(private router: Router){}
  navigateToForm(){
    this.router.navigate(['app-information-form'])
  }

}


//encapsulation -  dziedziczenie. Ustawiliśmy na None aby zapobiec zaciąganiu się styli 