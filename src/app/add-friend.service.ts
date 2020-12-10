import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Friend} from './friend';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  url = 'http://localhost:9100/';
  constructor(private http: HttpClient) {
    this.http = http;
  }
  addFriend(newFriend: Friend): Observable<any> {
    return this.http.post<any>(this.url, newFriend);
  }
}
