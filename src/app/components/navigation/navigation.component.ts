import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {SelectItem} from 'primeng/api';
import { DetailsService } from '../../service/details.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  category:string;
  character: string;
  characterList: SelectItem[]; 
  selectedCharacter: string[];
 

  constructor(private activatedRoute: ActivatedRoute,
            private router: Router,
            private detailsService: DetailsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) =>{
        if (params['category']) {
          this.category = params['category'];
          this.characterList = this.detailsService.getNavigationList();
        }
      }
    )
  }

  gotoSelected() {
    this.router.navigate(['/displayCategory',  this.category,  this.selectedCharacter ]);
  }

}
