import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mydata: MyDataType[] = [{ id: 1, name: 'Aleja' }, { id: 2, name: 'Giraldo' }];
  constructor() {}

  getUsersForSubscription(): Observable<MyDataType[]> {
    let data = new Observable<MyDataType[]>(observer => {
      setTimeout(() => {
        observer.next(this.mydata);
      }, 2000);
    });
    return data;
  }
}

export class MyDataType {
  public id: number;
  public name: string;
}
