import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../shared/user.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  userauth$ = new BehaviorSubject<IUser>(null)

  constructor(private userService: UserService) {}

  login(username:string, password: string, biens) {
    var bien;

   this.userService.user$.subscribe(users =>{
      const user = users.find(user => user.name === username && user.password === password)
      if(user) {
        user.owned = []
        for (bien of biens){
            if (user.id === bien.idowner){
              user.owned.push(bien)
            }
        }
        this.userauth$.next(user)
        return true
      }
    })
  }

  logout(){
    this.userauth$.next(null)
  }
}
