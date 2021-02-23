import { Component, Input, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { BienService } from '../services/house.service';
import { IBien } from '../shared/bien.interface';
import { IUser } from '../shared/user.interface';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  biens : IBien[];
  user: IUser;
  constructor(private bienService: BienService,private authService : AuthentificationService){
    this.bienService.bien$.subscribe((biens : IBien[])=>{
      this.biens = biens;
    })
    this.authService.userauth$.subscribe((user : IUser)=>{
      this.user = user;
    })
  }

  ngOnInit(): void {
  }
  sell(id){
    var immotosell;
    var item;
    var immtonull;
    for(item of this.user.owned){
      if (item.id === id){
        immtonull = this.biens.indexOf(item)
        immotosell = this.user.owned.indexOf(item)
        this.user.owned.splice(immotosell,1)
        this.biens[immtonull].idowner = null
        this.user.money = this.user.money + item.price
      }
    }
  }
}
