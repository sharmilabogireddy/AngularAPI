import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { LogInComponent } from './logIn/logIn.component';


export const routes: Routes = [
  { path : 'home', component: HomeComponent  },
  { path : 'log', component: LogComponent  },
  { path : 'logIn', component: LogInComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent, LogComponent, LogInComponent]

