import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-user-info',
  templateUrl: './business-user-info.component.html',
  styleUrls: ['./business-user-info.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BusinessUserInfoComponent {
  constructor(private router: Router) {}
}
