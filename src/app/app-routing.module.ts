import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersComponent } from "./components/users/users.component";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from "./components/register/register.component";
import { EnrollmentListComponent } from "./components/enrollment-list/enrollment-list.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/users", pathMatch: "full" },
  { path: "users", component: UsersComponent, canActivate: [AuthGuard] },
  { path: "profile/:id", component: ProfileComponent, canActivate: [AuthGuard]},
  { path: "enrollment", component: EnrollmentListComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
