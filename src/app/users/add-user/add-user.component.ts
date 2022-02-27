import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  public addUserForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  createUser() {
    const formValue = this.addUserForm.value;
    console.log(formValue);
    this.userService.addUser(formValue).subscribe(
      (res) => {
        this._snackBar.open(`User created with values: ${res}`);
      },
      (err) => {
        this._snackBar.open(`Unable to create user`, err);
      }
    );
  }
}
