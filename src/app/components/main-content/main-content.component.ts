import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  category: string = "";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    if ( this.activatedRoute.snapshot.params["category"] !== undefined) {
      this.category = this.activatedRoute.snapshot.params["category"];
    }
  }

}
