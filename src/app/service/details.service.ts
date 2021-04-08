import { Injectable } from '@angular/core';
import { from, Observable, Subject , pipe} from 'rxjs';
import { ICollectible } from '../shared/ICollectible.model';
import {SelectItem} from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { NavigationData } from '../shared/navigation-data';

import { ISelectionTypes } from '../shared/ITypes.model';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  // Create a subject - The thing that will be watched by the observable
   dataCollectible = new Subject<ICollectible>();

    // Create an observable to watch the subject and send out a stream of updates (You will subscribe to this to get the update stream)
   dataCollectible$ = this.dataCollectible.asObservable();

   private navigationDataUrl ="/navigation-data";

   // Create a method that allows you to update the subject being watched by observable
   getDataCollectibleSubject(dataCollectible) {
     this.dataCollectible.next(dataCollectible);
   }
   
  id: string;
  collectionList : ICollectible [] = [
            { id: 100,
              name: "Spider-man",
              title: "Spider-man Marvel Legends",
              category: "Action Figure",
              brand: "Hasbro",
              price: "30.00",
              condition: "good",
              img: "spidey01.jpg"
            },
            { id: 101,
              name: "Spider-man",
              title: "Spider-man Titan Figure",
              category: "Action Figure",
              brand: "Hasbro",
              price: "30.00",
              condition: "good",
              img: "spidey02.jpg"
            },
            { id: 103,
              name: "Spider-man",
              title: "Spider-man Adventures",
              category: "Action Figure",
              brand: "Playskool",
              price: "30.00",
              condition: "fair",
              img: "spidey03.jpg"
            },
            { id: 104,
              name: "Spider-man",
              title: "Spider-man 1/6 scale",
              category: "Statue",
              brand: "Diamond Select",
              price: "150.00",
              condition: "good",
              img: "spidey03.jpg"
            },
            { id: 400,
              name: "Batman",
              title: "Batman Animated",
              category: "Statue",
              brand: "Hasbro",
              price: "30.00",
              condition: "good",
              img: "batman01.jpg"
            },
            { id:401,
              name: "Batman",
              title: "Batman Big Fig",
              category: "Statue",
              brand: "Mondo",
              price: "60.00",
              condition: "mint",
              img: "batman02.jpg"
            },
            { id:403,
              name: "Batman",
              title: "Batman Adventures",
              category: "Action Figure",
              brand: "Playskool",
              price: "100.00",
              condition: "fair",
              img: "batman03.jpg"
            }
        ];

  typesList = [
                {label: 'Action Figure', value: 'Action Figure'},
                {label: 'Bust', value: 'Bust'},
                {label: 'Diorama', value: 'Diorama'},
                {label: 'Statue', value: 'Statue'},
                {label: 'Misc', value: 'Misc'},
              ]



  constructor(private http:HttpClient ) { }
                  
  getDetail(name: string, detailsId: number) {
    let temp;
    this.collectionList.find( item => {
     if (item.name === name) {
          if (item.id === detailsId) {
            temp = item;
          }
     }});
    return temp
  }

 getNavigationList(): Observable<ISelectionTypes> {
   return from ( NavigationData.navigation_data)
   .pipe(
     map(data => ({
      ...data
     }) as ISelectionTypes),
     tap( data => console.log(data))
   )
 }
  getDetails(name: string, detailsId: number) :void{
  }

  getCollectionList(character: string, category: string): ICollectible[] {
    let temp = [];
    if (character !== undefined) {
        this.collectionList.map( data => {
        if (data.name === character && data.category === category) {
          temp.push( data);
        }
      }); 
    } else {
      this.collectionList.map( data => {
        if (data.category === category) {
          temp.push( data);
        }
      })
    }
    return temp;
  }

  getTypes(): any[] {
    return this.typesList;
  }

  saveItem(item: ICollectible){
    // do save here
    this.collectionList.map( data => {
      if (data.id === item.id && data.category === item.category) {
        Object.assign(data, item);
      };
    });
  }
}
