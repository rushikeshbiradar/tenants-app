import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { RentComponent } from './components/rent/rent.component';
import { ReadingComponent } from './components/reading/reading.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'rent', component: RentComponent },
    { path: 'reading', component: ReadingComponent }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }