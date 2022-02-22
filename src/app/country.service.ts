import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor() {}

  getCountries() {
    return [
      {
        name: 'Afghanistan',
        region: 'Asia',
        area: 652230.0,
        independent: false,
      },
      {
        name: 'Åland Islands',
        region: 'Europe',
        area: 1580.0,
        independent: false,
      },
    ];
  }
}
