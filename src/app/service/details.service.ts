import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICollectible, ICollectibleList } from '../shared/ICollectible.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  // Create a subject - The thing that will be watched by the observable
   dataCollectible = new Subject<ICollectible>();

    // Create an observable to watch the subject and send out a stream of updates (You will subscribe to this to get the update stream)
   dataCollectible$ = this.dataCollectible.asObservable();

   // Create a method that allows you to update the subject being watched by observable
   getDataCollectibleSubject(dataCollectible) {
     this.dataCollectible.next(dataCollectible);
   }
   
  id: string;
  collectionList : ICollectibleList[] = [
      {name: "Spider-man" , 
         "details": [
            { id: 1,
              name: "Spider-man",
              type: "Action Figure",
              brand: "Hasbro",
              price: "30.00",
              condition: "good",
              img: "spidey01.jpg"
            },
            { id: 2,
              name: "Spider-man Titan Figure",
              type: "Action Figure",
              brand: "Hasbro",
              price: "30.00",
              condition: "good",
              img: "spidey02.jpg"
            },
            { id: 3,
              name: "Spider-man Adventures",
              type: "Action Figure",
              brand: "Playskool",
              price: "30.00",
              condition: "fair",
              img: "spidey03.jpg"
            }
          ]},
          {name: "Batman" , 
         "details": [
            { id: 1,
              name: "Batman Animated",
              type: "Action Figure",
              brand: "Hasbro",
              price: "30.00",
              condition: "good",
              img: "batman01.jpg"
            },
            { id: 2,
              name: "Batman Big Fig",
              type: "Action Figure",
              brand: "Mondo",
              price: "60.00",
              condition: "mint",
              img: "batman02.jpg"
            },
            { id: 3,
              name: "Batman Adventures",
              type: "Action Figure",
              brand: "Playskool",
              price: "100.00",
              condition: "fair",
              img: "batman03.jpg"
            }
          ]}
        ];

  navigationList =  [{label:'Spider-man', value:"Spider-man"},
                    {label:'Batman',value:"Batman"}, 
                    {label:'Wonder Woman', value:"Wonder Woman"},
                    {label:'Hall of Justice', value:'Hall of Justice'}, 
                    {label:'Superman', value:"Superman"}
                  ];

  constructor() { }


  setDetails(id: string) :void{
    this.id = id;
   // this.getDataCollectibleSubject(this.data[parseInt(id) - 1]);
  }

  getCollectionList(character: string): ICollectibleList[] {
    let temp = [];
    let found = false;
    this.collectionList.map( data => {
      if (data.name === character) {
       temp = [];
       temp.push({
          name: data.name,
          details: data.details
        })
        found = true;
      } else {
        if (!found) {
          temp.push({
            name: data.name,
            details: data.details
          })
        }
      }
    }); 
    return temp;
  }

  getNavigationList(): any[] {
    return this.navigationList;
  }

}
