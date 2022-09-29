import { Component, OnInit, ɵɵstylePropInterpolate1 } from '@angular/core';
import { RestCountries } from 'src/app/model/model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home-description',
  templateUrl: './home-description.component.html',
  styleUrls: ['./home-description.component.scss'],
})
export class HomeDescriptionComponent implements OnInit {
  public restCountries: RestCountries[] = [];

  constructor(public countriesS: CountriesService) {}

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.countriesS.getCountries().subscribe({
      next: (restCountries) => (this.restCountries = restCountries),
      error: (err) => console.log(err),
    });
  }

  orderByCountry() {
    this.restCountries.sort((c1, c2) => c1.name.common.localeCompare(c2.name.common));
  }

  orderByPopolation() {
    this.restCountries.sort((c1, c2) => c1.population - c2.population);
  }
}
