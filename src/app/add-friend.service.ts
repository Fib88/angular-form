import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Friend} from './friend';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  constructor(private http: HttpClient) {
    this.http = http;
  }
  addFriend(newFriend: Friend): any {
    const request = this.http.post('', newFriend);
    this.addFriend(newFriend);
    return request;
  }
}
