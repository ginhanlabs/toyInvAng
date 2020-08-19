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
    id: 1,
    name: "Spider-man",
    type: "Action Figure",
    brand: "Diamond Select",
    price: "20.00",
    condition: "Good",
    img: "https://www.amazon.com/Spider-Man-Hasbro-Legends-Collectible-Collection/dp/B083TGNQP4/ref=sr_1_2?dchild=1&keywords=marvel+legends+spiderman&qid=1597798418&sr=8-2"
  }

  constructor() { }

  ngOnInit(): void {

  }

}
