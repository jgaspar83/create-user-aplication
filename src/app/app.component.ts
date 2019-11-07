import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'create-user-aplication';
 
  constructor(private userService: UsersService) {}

  //Retorna os usuários registrado no serviço
  getUsers(){
    return this.userService.getUsers();
  }
}
