import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ICollectible } from './../../shared/ICollectible.model';
import { Observable, Subject, Subscription } from 'rxjs';
import { DetailsService } from '../../service/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy{

  display: boolean = false;
  id:string;
  sub: Subscription ;
  dataSub : Subscription;
  collection: ICollectible;
  

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
   

    this.dataSub = this.detailsService.dataCollectible$.subscribe(data => {
      console.log(" data collectible " + data);
      this.collection = data;

    })

  }

  ngOnDestroy():void {
    this.sub.unsubscribe();
  }
  


}
