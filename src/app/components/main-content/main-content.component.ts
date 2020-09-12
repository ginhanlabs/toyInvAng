import { ICollectible, ICollectibleList } from './../../shared/ICollectible.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  collectionList: ICollectibleList[];
  character: string;

  modalValue = {
    name: "",
    detail: {}
  }

  constructor(private activatedRoute: ActivatedRoute,
      private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) =>{
        if (params['category']) {
          this.category = params['category'];
          this.character = params['character'];
          this.collectionList = this.detailsService.getCollectionList(this.character);
        }
      }
    )
  }

  editButtonPressed(name:string, item: ICollectible) {
    this.display = true;
    this.modalValue = {
      name: name,
      detail: item
    }
  }

  // viewDetails(name: string, detailsId:number) : void {
  //   // this.itemId = id;
  //   //console.log(" in mainContent component = " + this.itemId);
  //   this.detailsService.setDetails(name, detailsId);
  // }
}
