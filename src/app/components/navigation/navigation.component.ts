import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  display: boolean = false;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("hello nav");
  }

  displayNavigation() {
    console.log("yes");
  }

}
