import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/add-blog', pathMatch: 'full' },
  { path: 'add-blog', component: AddBlogComponent },
  { path: 'view-blogs', component: BlogListComponent },
  { path: 'view-blog/:id', component: BlogDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
