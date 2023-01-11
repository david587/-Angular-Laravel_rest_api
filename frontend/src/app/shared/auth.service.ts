import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  //szüksége van felhasználónévre és jelszóra
  login(user: string, pass: string){
    //json válasz
    let userData ={
      name: user,
      password: pass
    }

    //átalakitjuk json formára
    let userDataJson = JSON.stringify(userData);

    //paraméterként fogadja hogy mit kuldunk at
    let header = new HttpHeaders({
      'content-Type': 'application/json'
    });

    //at kell alakitani
    let httpOption = {
      headers:header
    } ;
    let endpoint = 'login';
    let url = this.host + endpoint;

    //küldés httpvel
    return this.http.post<any>(url,userDataJson,httpOption);
}
}
