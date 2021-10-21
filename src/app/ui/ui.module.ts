import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { AngularEmojisModule } from 'angular-emojis';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [SectionComponent];
const modules = [AngularEmojisModule, FontAwesomeModule];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components, modules],
})
export class UiModule {}
