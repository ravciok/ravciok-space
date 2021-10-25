import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from '@blog/blog-routing.module';
import { BlogComponent } from '@blog/components/blog-post/blog.component';
import { BlogListComponent } from '@blog/components/blog-list/blog-list.component';
import { UiModule } from '@ui/ui.module';

@NgModule({
  declarations: [BlogListComponent, BlogComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule, UiModule],
})
export class BlogModule {}
