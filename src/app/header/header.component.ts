import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { BienService } from '../services/house.service';
import { IBien } from '../shared/bien.interface';
import { IUser } from '../shared/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name:string;
  password: string;

  ngOnInit(): void {
  }
  user: IUser;
  biens : IBien[];
  constructor(private bienService: BienService,private authService : AuthentificationService){
    this.bienService.bien$.subscribe((biens : IBien[])=>{
      this.biens = biens;
    })
    this.authService.userauth$.subscribe((user : IUser)=>{
      this.user = user;
    })
  }
  login() {return this.authService.login(this.name, this.password, this.biens)}

}
