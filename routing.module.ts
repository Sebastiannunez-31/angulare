import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent} from  './components/login/login.component';
import { StatComponent } from './components/myStats/stat.component';
import { ExecutivesComponent } from './components/executives/executives.component';
import { SolutionComponent } from './components/Solution/solution.component';
import { LostComponent} from './components/lostPass/lost.component';


const appRoutes: Routes = [       

    { path: 'home', component: HomeComponent, 
      children: [
                { path:'', redirectTo: 'principal', pathMatch: 'full' },
                { path: 'principal', component: MainComponent},
                { path: 'login', component: LoginComponent},
                { path: 'solution',component :SolutionComponent},
                { path: 'statistic', component: StatComponent},
                { path: 'executives', component: ExecutivesComponent},
             
               


      ] },
    { path: 'lostpassword', component: LostComponent},
    { path: '', component: LoginComponent},
    { path: '**', redirectTo: 'home/principal', pathMatch: 'full' }
    
];

export const routing = RouterModule.forRoot(appRoutes);

//localhost:1210/home/principal