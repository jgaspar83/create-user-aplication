import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  onSubmitForm(form) {
    this.userService.addUser(form.value);
  }
}
