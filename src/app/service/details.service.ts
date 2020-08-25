import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICollectible } from '../shared/ICollectible.model';

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
  data: ICollectible[] = [{
    id: 1,
    hero: "Spider-man",
    name: "Spider-man Marvel Legends",
    type: "Action Figure",
    brand: "Hasbro",
    price: "20.00",
    condition: "Good",
    img: "https://www.amazon.com/Spider-Man-Hasbro-Legends-Collectible-Collection/dp/B083TGNQP4/ref=sr_1_2?dchild=1&keywords=marvel+legends+spiderman&qid=1597798418&sr=8-2"
  },
  {
    id: 2,
    hero: "Spider-man2",
    name: "Spider-man Marvel Legends2",
    type: "Action Figure",
    brand: "Hasbro",
    price: "20.00",
    condition: "Good",
    img: "https://www.amazon.com/Spider-Man-Hasbro-Legends-Collectible-Collection/dp/B083TGNQP4/ref=sr_1_2?dchild=1&keywords=marvel+legends+spiderman&qid=1597798418&sr=8-2"
  },
  {
    id: 3,
    hero: "Spider-man3",
    name: "Spider-man Adventures",
    type: "Action Figure",
    brand: "Hasbro",
    price: "10.00",
    condition: "Good",
    img: "https://www.amazon.com/Spider-Man-Hasbro-Legends-Collectible-Collection/dp/B083TGNQP4/ref=sr_1_2?dchild=1&keywords=marvel+legends+spiderman&qid=1597798418&sr=8-2"
  }
]
  constructor() { }


  setDetails(id: string) :void{
    this.id = id;
    this.getDataCollectibleSubject(this.data[parseInt(id) - 1]);
  }

}
