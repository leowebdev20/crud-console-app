import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  userId: string;
  singleUser: any;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(res => {
      console.log(res);

      this.userId = res.id;
    })

    this.userService.viewUser(this.userId).subscribe(res => {
      // this.listUsers = res;
      console.log(res);
      this.singleUser = res;
    })
  }


  // viewSingleUser(id) {
  //   this.userService.viewUser(id).subscribe(res => {
  //     console.log(res);
  //     this.listUsers = res;
  //   })
  // }

}
