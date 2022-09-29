import { Component, Input, OnInit } from '@angular/core';
import { RestCountries } from 'src/app/model/model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() selectedRestCountries?: RestCountries;

  constructor() {}

  ngOnInit(): void {}
}
