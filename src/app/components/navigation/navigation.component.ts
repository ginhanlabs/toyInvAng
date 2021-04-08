import { Component, Input, OnInit } from '@angular/core';
import { map, catchError, tap} from 'rxjs/operators';
import { EMPTY, pipe, Subscription } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {SelectItem} from 'primeng/api';
import { DetailsService } from '../../service/details.service';
import { ISelectionTypes } from '../../shared/ITypes.model';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  category:string;
  character: string;
  temp = [];
  
   sub: Subscription= this.detailsService.getNavigationList()
    .pipe(
      tap( x => console.log(" data returned " + JSON.stringify(x)))
    )
    .subscribe(x => {
     this.temp.push(x);
     console.log("from susbribe " + JSON.stringify(this.temp))
    })

  selectedCharacter: string[];
 

  constructor(private activatedRoute: ActivatedRoute,
            private router: Router,
            private detailsService: DetailsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) =>{
        if (params['category']) {
          this.selectedCharacter = params['character'];
          this.category = params['category'];
  
         // this.characterList = this.detailsService.getNavigationList();
        }
      }
    )
  }

  gotoSelected() {
    this.router.navigate(['/displayCategory',  this.category,  this.selectedCharacter ]);
  }

}
