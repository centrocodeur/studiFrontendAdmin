import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {UserStorageService} from "./storage/user-storage.service";


//const BASIC_URL= "http://localhost:8080/";
//const BASIC_URL= "https://studiprojetbackend-production.up.railway.app/";
const BASIC_URL= "https://studi-jo-backend-production.up.railway.app/";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userStorageService: UserStorageService) { }

  register(signupRequest: any): Observable<any>{
    return this.http.post(BASIC_URL+ "sign-up", signupRequest);
  }


  login(username:string, password:string): any {
    const headers= new HttpHeaders().set('content-Type', 'application/json');
    const body={username, password};

    return this.http.post(BASIC_URL+ 'authenticate',body, {headers, observe :'response'} ).pipe(
      map((res) =>{
        const token= res.headers.get('authorization').substring(7);
        const user = res.body;
        if(token && user){
          this.userStorageService.saveToken(token);
          this.userStorageService.saveUser(user);
          return true;
        }
        return false
      })
    )

  }
}
