import { IBien } from "./bien.interface";

export interface IUser {
    id: number;
    name: string;
    password:string;
    money:number;
    owned?: IBien[]
}