import { INavigation } from './../../shared/navigation.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  display: boolean = true;
  selectedName: string[];
  characterList: SelectItem[]; selectedCharacter: string[];
 

  constructor(private activatedRoute: ActivatedRoute) {

    this.characterList = [ 
      {label:'Spider-man', value:{id: 1, name: "Spider-man", category: ['Action Figure', 'Statue', 'Busts']}},
      {label:'Batman',value:{id: 2, name: "Batman", category: ['Action Figure', 'Statue', 'Busts']}}, 
      {label:'Wonder Woman', value:{id: 3, name: "Wonder Woman", category: ['Action Figure']}},
      {label:'Hall of Justice', value:{id:4, name: 'Hall of Justice', category: ["Diorama"]}}, 
      {label:'Superman', value:{id: 5, name: "Superman", category: ['Action Figure', "Busts"]}}
    ];
  }

  ngOnInit(): void {
   console.log("hello nav");

  }

  displayNavigation() {
    console.log("yes");
  }

}



// 
//constructor() { 
  //SelectItem API with label-value pairs 
  //
     //An array of cities this.cities2 = [ {name: 'New York', code: 'NY'},
     // {name: 'Rome', code: 'RM'}, {name: 'London', code: 'LDN'}, {name: 'Istanbul', code: 'IST'}, 
     //{name: 'Paris', code: 'PRS'} ]; } }
