import {Routes} from '@angular/router';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

export const routes: Routes = [
  {path: 'contact-me', component: ContactMeComponent},
  {path: 'about-me', component: AboutMeComponent},
  { path: 'my-projects', component: MyProjectsComponent },
  { path: '', redirectTo: '/my-portfolio', pathMatch: 'full' },
  { path: '**', redirectTo: '/my-portfolio', pathMatch: 'full' }
];
