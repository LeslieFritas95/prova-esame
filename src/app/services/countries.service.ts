import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestCountries } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private readonly BASE_URL = 'https://restcountries.com/v3.1/region/europe';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<RestCountries[]> {
    return this.http.get<RestCountries[]>(this.BASE_URL);
  }
}
