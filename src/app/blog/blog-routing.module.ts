import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './components/blog-post/blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent,
  },
  {
    path: ':slug',
    component: BlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
