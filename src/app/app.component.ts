import { Component } from '@angular/core';
import setInfo from '../assets/json/setInfo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Set List Plotter';
  data = setInfo
}
