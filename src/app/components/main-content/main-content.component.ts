import { ICollectible } from './../../shared/ICollectible.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  category: string = "";
  data: ICollectible[] = [
      { id: 1,
        name: "Spider-man",
        type: "Action Figure",
        brand: "Marvel",
        price: "30.00",
        condition: "good",
        img: "https://www.amazon.com/Spider-Man-Hasbro-Legends-Collectible-Collection/dp/B083TGNQP4/ref=sr_1_2?dchild=1&keywords=marvel+legends+spiderman&qid=1597798418&sr=8-2"
      },
      { id: 2,
        name: "Spider-man",
        type: "Action Figure",
        brand: "Marvel",
        price: "30.00",
        condition: "good",
        img: "https://www.amazon.com/Spider-Man-Hasbro-Legends-Collectible-Collection/dp/B083TGNQP4/ref=sr_1_2?dchild=1&keywords=marvel+legends+spiderman&qid=1597798418&sr=8-2"
      },
      { id: 2,
        name: "Spider-man",
        type: "Action Figure",
        brand: "Marvel",
        price: "30.00",
        condition: "good",
        img: "https://www.amazon.com/Spider-Man-Hasbro-Legends-Collectible-Collection/dp/B083TGNQP4/ref=sr_1_2?dchild=1&keywords=marvel+legends+spiderman&qid=1597798418&sr=8-2"
      }

  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    if ( this.activatedRoute.snapshot.params["category"] !== undefined) {
      this.category = this.activatedRoute.snapshot.params["category"];
    }
  }

}
