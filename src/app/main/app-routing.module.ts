import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('../blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'resume',
    loadChildren: () => import('../resume/resume.module').then((m) => m.ResumeModule),
  },
  {
    path: 'about',
    loadChildren: () => import('../about/about.module').then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
