import { ICollectible } from './../../shared/ICollectible.model';
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
  collectionList: ICollectible[];
  character: string;
  name:string;
  selectedType = {}
  model = {
    id: null,
    title: "",
    name : "",
    category : "",
    brand: "",
    price: "",
    condition: "",
    img: ""
  };

  typeOptions = [];

  constructor(private activatedRoute: ActivatedRoute,
      private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.typeOptions = this.detailsService.getTypes();

    this.activatedRoute.params.subscribe(
      (params: Params) =>{
        if (params['category']) {
          this.category = params['category'];
          this.character = params['character'];
          this.collectionList = this.detailsService.getCollectionList(this.character, this.category);
        }
      }
    )
  }

  editButtonPressed(name:string, item: ICollectible, category: string) {
    
     this.selectedType = this.typeOptions.find(t =>  t.label === category);
    this.display = true;
    this.model = {
      id: item.id,
      title: item.title,
      name: item.name,
      category: category,
      brand: item.brand,
      price: item.price,
      condition: item.condition,
      img: item.img
    }
  }

  cancelDialog() {
    this.display = false;
  }

  saveDialog() {
    //console.log(this.modalForm);

    this.detailsService.saveItem(this.model)
    this.display = false;

  }

  // viewDetails(name: string, detailsId:number) : void {
  //   // this.itemId = id;
  //   //console.log(" in mainContent component = " + this.itemId);
  //   this.detailsService.setDetails(name, detailsId);
  // }
}
