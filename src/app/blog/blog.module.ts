import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './components/blog-post/blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { UiModule } from '../ui/ui.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [BlogListComponent, BlogComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule, UiModule, FontAwesomeModule],
})
export class BlogModule {}
