import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [];

  constructor() { }

//Adiciona os usuários na Propriedade users desta classe
addUser(user) {
  if (this.users.indexOf(user) === -1) {

    this.users = this.users.concat(user);
  }
}

//Retorna os usuários do serviço
getUsers() {
  return this.users;
}

}
