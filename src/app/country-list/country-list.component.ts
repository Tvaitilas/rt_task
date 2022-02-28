import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  public countries: any = [];
  constructor(private _countryService: CountryService) {}

  ngOnInit(): void {
    // this._countryService
    //   .getCountries()
    //   .subscribe((data) => (this.countries = data));

    this._countryService
      .getCountries()
      .subscribe((data) => (this.countries = data));

    console.log(this.countries);
  }
}
