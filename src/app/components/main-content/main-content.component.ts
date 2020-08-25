import { ICollectible } from './../../shared/ICollectible.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../../service/details.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  display: boolean = false;
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

  constructor(private activatedRoute: ActivatedRoute,
      private detailsService: DetailsService) { }

  ngOnInit(): void {
    
    if ( this.activatedRoute.snapshot.params["category"] !== undefined) {
      this.category = this.activatedRoute.snapshot.params["category"];
    }
  }

  viewDetails(id:string) : void {
    this.itemId = id;
    console.log(" in mainContent component = " + this.itemId);
    this.detailsService.setDetails(id);
  }
}
