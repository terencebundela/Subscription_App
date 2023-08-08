import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { UserListComponent } from './user-list/user-list.component';
SubscriptionFormComponent
UserListComponent
const routes: Routes = [
  {path: '', component: SubscriptionFormComponent},
  {path: 'user-list', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
