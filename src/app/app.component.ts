import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 serverElement =[{type: 'server', name:'Testserver', content:'Just a test!'}];
 a = 1;//git  <---I changed here;
}
