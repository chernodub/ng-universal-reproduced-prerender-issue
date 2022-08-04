import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  constructor(

  ) {
    // The reason of failed prerender
    console.log(
      localStorage.getItem('test-key'),
    );
  }

}
