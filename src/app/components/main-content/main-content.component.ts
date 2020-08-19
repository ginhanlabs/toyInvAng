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
  itemId: string;

  data: ICollectible[] = [
      { id: 1,
        hero: "Spider-man",
        name: "Spider-man",
        type: "Action Figure",
        brand: "Hasbro",
        price: "30.00",
        condition: "good",
        img: "spidey01.jpg"
      },
      { id: 2,
        hero: "Spider-man",
        name: "Spider-man Titan Figure",
        type: "Action Figure",
        brand: "Hasbro",
        price: "30.00",
        condition: "good",
        img: "spidey02.jpg"
      },
      { id: 3,
        hero: "Spider-man",
        name: "Spider-man Adventures",
        type: "Action Figure",
        brand: "Playskool",
        price: "30.00",
        condition: "fair",
        img: "spidey03.jpg"
      }

  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    if ( this.activatedRoute.snapshot.params["category"] !== undefined) {
      this.category = this.activatedRoute.snapshot.params["category"];
    }
  }

  showDetails(id:string) : void {
    this.itemId = id;
    console.log(this.itemId)
  }
}
