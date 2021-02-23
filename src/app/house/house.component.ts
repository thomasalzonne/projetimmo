import { Component, Input, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { IBien } from '../shared/bien.interface';
import { IUser } from '../shared/user.interface';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  user: IUser;
  constructor(private authService : AuthentificationService){
    this.authService.userauth$.subscribe((user : IUser)=>{
      this.user = user;
    })
  }

  ngOnInit(): void {
  }
  sell(id){
    var immotosell;
    var item;
    for(item of this.user.owned){
      if (item.id === id){
      immotosell = this.user.owned.indexOf(item)
      this.user.owned.splice(immotosell,1)
        this.user.money = this.user.money + item.price
      }
    }
  }
}
