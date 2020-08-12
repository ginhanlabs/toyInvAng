import { INavigation } from './../../shared/navigation.model';
import { NavigationService } from './../../shared/NavigationService';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  display: boolean = true;
  data: INavigation[];

  constructor(private activatedRoute: ActivatedRoute,
            private navigationService: NavigationService) { }

  ngOnInit(): void {
    /* TODO filter out from param */
    console.log("hello nav");
    this.data = this.navigationService.getNavigation();
  }

  displayNavigation() {
    console.log("yes");
  }

}
