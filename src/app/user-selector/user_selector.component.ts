import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'user-selector',
  templateUrl: './user_selector.component.html',
  styleUrls: ['./user_selector.component.css']
})
export class UserSelectorComponent {

  constructor(private appService: AppService){}

  // setDuration() {
  //     this.appService.setDuration()
  // }
}
