import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { IUser } from '../shared/user.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit { 

  ngOnInit(): void {
  }
  user: IUser;
  constructor(private authService : AuthentificationService){
    this.authService.userauth$.subscribe((user : IUser)=>{
      this.user = user;
    })
  }

}
