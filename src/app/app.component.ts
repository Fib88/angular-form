import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService} from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private addFriendService: any;
  constructor() {
    this.addFriendService = AddFriendService;
  }

  title = 'angular-form';
  languages = ['JavaScript', 'PHP', 'JAVA', 'Python', 'C#'];
  friendModel = new Friend('' , '', '', null , null );
  showData(): any {
    return console.log(this.friendModel);
  }
}
