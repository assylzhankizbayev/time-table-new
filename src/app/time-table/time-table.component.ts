import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss'],
})
export class TimeTableComponent implements OnInit {
  data$: Observable<User>;
  workingDays = 5;
  currentWeekDay$: Observable<number> = timer(0, 30000).pipe(
    map(() => new Date().getDay())
  );

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.data$ = this.usersService.users;
    this.data$.subscribe((value) => {
      console.log(value);
    });
  }
}
