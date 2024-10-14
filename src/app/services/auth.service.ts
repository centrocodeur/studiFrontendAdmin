import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


//const BASIC_URL= "http://localhost:8080/";
const BASIC_URL= "https://studiprojetbackend-production.up.railway.app/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,) { }

  register(signupRequest: any): Observable<any>{
    return this.http.post(BASIC_URL+ "sign-up", signupRequest);
  }
}
