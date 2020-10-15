import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { DetailsService } from '../../service/details.service';
import { ICollectible } from '../../shared/ICollectible.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy{
  @Input() character: string;
  @Input() detailsId: number;
  
  id:string;
  dataSub : Subscription;
  collectible;
  

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.collectible = this.detailsService.getDetail(this.character, this.detailsId);
    console.log(this.collectible);
   
    // this.dataSub = this.detailsService.dataCollectible$.subscribe(data => {
    //   console.log(" data collectible " + data);
    //   this.collectible = data;
    // })

  }

  ngOnDestroy():void {
   // this.dataSub.unsubscribe();
  }
  


}
