import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDescriptionComponent } from './pages/home-description/home-description.component';

const routes: Routes = [
  { path: 'countries', component: HomeDescriptionComponent },
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
  { path: '**', redirectTo: 'countries' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
