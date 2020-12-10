import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService} from './add-friend.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private addFriendService: AddFriendService) {
  }

  title = 'angular-form';
  languages = ['JavaScript', 'PHP', 'JAVA', 'Python', 'C#'];
  friendModel = new Friend('' , '', '', null , null );
  public showData(): any {
    this.addFriendService.addFriend(this.friendModel)
      .subscribe(
        succes => console.log('It worked'),
        error => console.log(error)
      );
    return console.log(this.friendModel);
  }
  public async retrieveData(url: string ): Promise<any> {
    return await fetch('http://localhost:9100/allFriends', {
      method : 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    } );

  }
}
