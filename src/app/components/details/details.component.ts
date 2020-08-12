import { Component, OnInit } from '@angular/core';
import { ICollectible } from './../../shared/ICollectible.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  display: boolean = true;
  data: ICollectible = {
    name: "Spider-man",
    type: "Action Figure",
    brand: "Diamond Select",
    price: "20.00",
    condition: "Good"
  }

  constructor() { }

  ngOnInit(): void {

  }

}
