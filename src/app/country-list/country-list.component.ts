import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  public countries: any = [];
  region: any;
  // area: number = 65300;
  p: number = 1;
  constructor(private _countryService: CountryService) {}

  ngOnInit(): void {
    this._countryService
      .getCountries()
      .subscribe((response) => (this.countries = response));

    console.log(this.countries);
  }

  searchByName() {
    if (this.region == '') {
      this.ngOnInit();
    } else {
      this.countries = this.countries.filter((res: { region: string }) => {
        return res.region
          .toLocaleLowerCase()
          .match(this.region.toLocaleLowerCase());
      });
    }
  }

  keyFirst: string = 'name';
  reverse: boolean = false;
  sort(keyFirst) {
    this.keyFirst = keyFirst;
    this.reverse = !this.reverse;

    console.log(keyFirst);
  }
}
