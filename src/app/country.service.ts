import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries() {
    let url = 'https://restcountries.com/v2/all?fields=name,region,area';
    let data = this.http.get(url);
    return data;
  }
}
