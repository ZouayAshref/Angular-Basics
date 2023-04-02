import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../core/services/user.servies';
import { MyDataType } from '../../core/services/user.servies';

@Component({
  selector: 'my-app-rxjs',
  templateUrl: './rxjs-example.component.html'
})
export class RxjsExampleComponent implements OnInit {
  subscriptionUsers: MyDataType[] = [];

  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.getUsersWithSubscription();
    this.switchMapExample();
  }

  getUsersWithSubscription() {
    this.authService.getUsersForSubscription().subscribe(
      //next
      res => {
        this.subscriptionUsers = res;
        console.log(
          'getUsersWithSubscription(): ' +
            JSON.stringify(this.subscriptionUsers)
        );
      },
      //error
      err => {
        console.log(err);
      },
      //complete
      () => {
        console.log('Finished !');
      }
    );
  }
  switchMapExample() {
    const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x * 2)));
    switched.subscribe(x => console.log(x));
  }
}
