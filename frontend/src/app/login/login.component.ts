import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name !: string;
  pass !: string;

  //login service injectálása
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    //betöltödéskor akarjuk hogy elinduljon
    this.login();
  }

  login() {
    let name = this.name;
    let pass = this.pass;
    //átadjuk a servicenek
    this.auth.login(name,pass)
    .subscribe(res => {
      //eltároljuk a tokeneket localhostba
      localStorage.setItem('token', res.token);
      localStorage.setItem('username', res.name);
      console.log(res);
    });
  }

}
