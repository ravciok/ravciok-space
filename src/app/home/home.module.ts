import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from '@home/home-routing.module';
import { HomeComponent } from '@home/home/home.component';
import { UiModule } from '@ui/ui.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, UiModule],
})
export class HomeModule {}
