import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { user } from 'src/app/model/workflow_model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: user;
  isCollapsed: boolean = false;

  constructor(public appService: AppService, private router: Router) {
    this.user = new user();
  }

  login() {
    this.appService
      .login(this.user)
      .subscribe((data: any) => {
        if (data[0].password == this.user.password) {
          this.router.navigateByUrl('home');
        }
      });
  }

  ngOnInit(): void {
  }

}
