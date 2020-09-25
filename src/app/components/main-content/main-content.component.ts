import { ICollectible, ICollectibleList } from './../../shared/ICollectible.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DetailsService } from '../../service/details.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  @ViewChild('f') modalForm: NgForm;
  display: boolean = false;
  category: string = "";
  itemId: string;
  collectionList: ICollectibleList[];
  character: string;
  name:string;

  tempForm = {
    name : "",
    type : "",
    brand: "",
    price: "",
    condition: ""
  };

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

  editButtonPressed(name:string, item: ICollectible, category: category) {
    this.display = true;
    this.tempForm.name = item.name;
    this.tempForm.type ='Action figure';
    this.tempForm.brand = item.brand;
    this.tempForm.price = item.price;
    this.tempForm.condition = item.condition;
  }

  cancelDialog() {
    this.display = false;
  }

  saveDialog() {
    console.log(this.modalForm);
    this.display = false;
  }
  // viewDetails(name: string, detailsId:number) : void {
  //   // this.itemId = id;
  //   //console.log(" in mainContent component = " + this.itemId);
  //   this.detailsService.setDetails(name, detailsId);
  // }
}
