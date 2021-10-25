import { NgModule } from '@angular/core';
import { AppRoutingModule } from '@main/app-routing.module';
import { AppComponent } from '@main/app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@core/core.module';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ScullyLibModule, HttpClientModule, CoreModule],
  providers: [Title, Meta],
  bootstrap: [AppComponent],
})
export class AppModule {}
