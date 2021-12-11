import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    ListUsersComponent,
    ViewUserComponent,
    EditUserComponent,
    AddUserComponent,
    DeleteUserComponent,
  ],
  imports: [CommonModule, MatListModule, RouterModule],
})
export class UsersModule {}
