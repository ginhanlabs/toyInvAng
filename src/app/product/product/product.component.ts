import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetailsService } from 'src/app/service/details.service';
import { ICollectible } from './../../shared/ICollectible.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Output() notifyParentEmitter = new EventEmitter<{item:string, category: string}>();
  @Input() item;
  @Input() category;
  selectedType = {};
  typeOptions = [];
  display: boolean = false;
  public name = "geek2";
  public age = 22;

  model = {
    id: null,
    title: "",
    name: "",
    category: "",
    brand: "",
    price: "",
    condition: "",
    img: ""
  };

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
   
  }

  editButtonPressed () {
    this.notifyParentEmitter.emit( {item: this.item, category: this.category});
  }

}
