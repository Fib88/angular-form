import { Component } from '@angular/core';
import { Friend } from './friend';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';
  languages = ['JavaScript', 'PHP', 'JAVA', 'Python', 'C#'];
  friendModel = {firstname: null, lastname: null, email: null, phonenumber: null, languages: null};
}
