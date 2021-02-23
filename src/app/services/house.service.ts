import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IBien } from "../shared/bien.interface";


@Injectable({
    providedIn : "root"
})

export class BienService{
    bien$: BehaviorSubject<IBien[]> = new BehaviorSubject<IBien[]>([
        {id:1,name:"maison de dinguo", idowner:1, address : "123 rue de washington", price:12000},
        {id:2,name:"maison de sdf", idowner:1, address : "123 rue de miami", price:12000},
        {id:3,name:"maison de Elon Musk", idowner:3, address : "123 rue de los angeles", price:12000},
    ])
}