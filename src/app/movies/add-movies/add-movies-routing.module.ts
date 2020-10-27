import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMoviesComponent } from './add-movies.component';

const routes: Routes = [{ path: '', component: AddMoviesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMoviesRoutingModule { }
