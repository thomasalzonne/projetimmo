import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IUser } from "../shared/user.interface";

@Injectable({
    providedIn : "root"
})

export class UserService{
    user$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([
        {id:1 ,name:"thomas", password : "azerty31", money:120000,owned: []},
        {id:2 ,name:"Totz", password : "azerty", money:200000,owned: []},
        {id:3 ,name:"Taze", password : "aze31", money:190000,owned: []},
    ])
}