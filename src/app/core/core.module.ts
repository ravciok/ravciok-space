import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@core/header/header.component';
import { FooterComponent } from '@core/footer/footer.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '@ui/ui.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, UiModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
