import { Component } from '@angular/core';
import { ROUTER_LIST } from './router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routerList = ROUTER_LIST;
}
