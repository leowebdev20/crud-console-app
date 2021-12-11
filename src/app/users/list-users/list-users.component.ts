import { Observable } from 'rxjs';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  // listUsers: Array<MyClass> = new Array();
  // listUsers: MyClass[] = [];
  // listUsers: any = [];
  listUsers: any = [];

  ngOnInit(): void {
    this.userService.listUsers().subscribe(res => {
      console.log(res);
      this.listUsers = res;
    })
  }


}
