import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'create', component: AddUserComponent },
  {
    path: 'list',
    children: [
      { path: '', component: ListUsersComponent },
      { path: 'view/:id', component: ViewUserComponent },
      { path: 'delete/:id', component: DeleteUserComponent },
      { path: 'edit/:id', component: EditUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
