import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'user-selector',
  templateUrl: './user_selector.component.html',
  styleUrls: ['./user_selector.component.css']
})
export class UserSelectorComponent {
  users = [ {id: null, name: '--'} ];
  selectedUser;

  constructor(private appService: AppService){}

  ngOnInit() {
    this.appService.getUsers()
    .subscribe(
      res => {
        this.users = this.users.concat(res)
      }
    )
  }

  sendUser(user) {
    if(user) {
      this.appService.setSelectedUser(user)  
    }
  }
}
