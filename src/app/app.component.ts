import {Component} from '@angular/core';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service';
import {OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private addFriendService: AddFriendService) {
  }

  public allFriends;
  title = 'angular-form';
  languages = ['JavaScript', 'PHP', 'JAVA', 'Python', 'C#'];
  friendModel = new Friend('', '', '', null, null);

  public showData(): any {
    this.addFriendService.addFriend(this.friendModel)
      .subscribe(
        succes => console.log(this.allFriends),
        error => console.log(error)
      );
    return console.log(this.friendModel);
  }

  public async retrieveData(url: string): Promise<any> {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return this.allFriends = await response.json();
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): any {
    this.retrieveData('http://localhost:9100/allFriends');
  }
}
