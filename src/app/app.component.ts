import { Component } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';
import { BienService } from './services/house.service';
import { IBien } from './shared/bien.interface';
import { IUser } from './shared/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'immobilier';
  name:string;
  password:string;
  biens : IBien[];
  user: IUser;
  imm: IBien;
  constructor(private bienService: BienService,private authService : AuthentificationService){
    this.bienService.bien$.subscribe((biens : IBien[])=>{
      this.biens = biens;
    })
    this.authService.userauth$.subscribe((user : IUser)=>{
      this.user = user;
    })
  }
}
