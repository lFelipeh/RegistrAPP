import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  username: string;

  constructor(private userDataService: UserDataService) {
    this.username = this.userDataService.getUsername();
  }

  ngOnInit() {}
}
