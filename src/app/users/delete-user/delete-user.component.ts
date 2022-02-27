import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent implements OnInit {
  userId: string = '';
  constructor(
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data.id;
    });

    if (this.userId) {
      this.userService.deleteUser(this.userId).subscribe((res) => {
        this._snackBar.open(`User deleted with values: ${res}`);
        this.router.navigate(['..', 'list'])
      }, err => {
        this._snackBar.open(`Unable to delete user`, err);
      });
    }
  }
}
