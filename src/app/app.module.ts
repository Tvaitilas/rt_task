import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryService } from './country.service';

@NgModule({
  declarations: [AppComponent, CountryListComponent, CountryDetailsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
