import { Injectable } from '@angular/core';
import { INavigation }  from './navigation.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  data: INavigation[] = [
    {name: "Spider-man", category: ['Action figure', 'Statue', "Bust"]},
    {name: "Batman" , category: ["Action figure", 'Statue']},
    {name: "Wonder Woman" , category: ["Action figure", 'Statue', 'Bust']},
    {name: "Green Goblin" , category: ["Action figure"]},
    {name: "Hall of Justice", category: ["Diorama"]}

  ]
  constructor() { }

  getNavigation() {
    /* TODO - hook up to firebase later */
    return  this.data;
  }
}
