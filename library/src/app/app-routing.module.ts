import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksearchComponent } from 'src/components/booksearch/booksearch.component';

const routes: Routes = [
  {path: '', redirectTo:'booksearch', pathMatch:'full'},
  {path:'booksearch', component:BooksearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
