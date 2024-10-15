import {Component, OnInit} from '@angular/core';
import {UserStorageService} from "./services/storage/user-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'FrontAdmin';

  isCustomerLoggedIn: boolean = UserStorageService.isCustomerLoggedIn();

  isAdminLoggedIn: boolean = UserStorageService.isAdminLoggedIn();

  constructor(private router: Router) {
  }

  ngOnInit():void{
    this.router.events.subscribe(event=>{
      this.isCustomerLoggedIn =UserStorageService.isCustomerLoggedIn();
      this.isAdminLoggedIn= UserStorageService.isAdminLoggedIn();
    })

  }

  logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }

}
