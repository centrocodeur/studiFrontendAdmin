import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserStorageService} from "../../services/storage/user-storage.service";

const BASIC_URL= "http://localhost:8080/";
//const BASIC_URL= "https://studiprojetbackend-production.up.railway.app/";
//const BASIC_URL= "https://studi-jo-backend-production.up.railway.app/";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addTicketCategory(ticketCategoryDto:any): Observable<any>{
    return this.http.post(BASIC_URL+ 'api/admin/ticket_category', ticketCategoryDto,{
      headers: this.createAuthorizationHeaders(),
    })
  }

  getAllAllTicketCategories(): Observable<any>{
    return this.http.get(BASIC_URL + 'api/admin/allCategories', {
      headers: this.createAuthorizationHeaders(),
    })
  }


  getAllTicket(): Observable<any>{
    return  this.http.get(BASIC_URL+ 'api/admin/tickets', {
      headers: this.createAuthorizationHeaders(),
    })
  }

  getTicketById(ticketId): Observable<any>{
    return  this.http.get(BASIC_URL+ `api/admin/ticket/${ticketId}`, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  getAllTicketsByName(title:any): Observable<any>{
    return  this.http.get(BASIC_URL+ `api/admin/search/${title}`, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  addTicket(ticketDto: any): Observable<any>{
    return  this.http.post(BASIC_URL+ 'api/admin/ticket', ticketDto, {
      headers: this.createAuthorizationHeaders(),
    })
  }




  updateTicket(ticketId: any, ticketDto:any): Observable<any>{
    return  this.http.put(BASIC_URL+ `api/admin/ticket/${ticketId}`, ticketDto, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  deleteTicket(ticketId: any): Observable<any>{
    return  this.http.delete(BASIC_URL+ `api/admin/ticket/${ticketId}`,  {
      headers: this.createAuthorizationHeaders(),
    })
  }



  getAllCompetitions(): Observable<any>{
    return  this.http.get(BASIC_URL+ 'api/admin/competitions', {
      headers: this.createAuthorizationHeaders(),
    })
  }

  addCompetition(competitionDto: any): Observable<any>{
    return  this.http.post(BASIC_URL+ 'api/admin/competition', competitionDto, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  updateCompetition(competitionId: any, competitionDto:any): Observable<any>{
    return  this.http.put(BASIC_URL+ `api/admin/competition/${competitionId}`, competitionDto, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  deleteCompetition(competitionId: any): Observable<any>{
    return  this.http.delete(BASIC_URL+ `api/admin/competition/${competitionId}`,  {
      headers: this.createAuthorizationHeaders(),
    })
  }

  addCoupon(couponDto: any): Observable<any>{
    return  this.http.post(BASIC_URL+ 'api/admin/coupons', couponDto, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  getCoupons(): Observable<any>{
    return  this.http.get(BASIC_URL+ 'api/admin/coupons', {
      headers: this.createAuthorizationHeaders(),
    })
  }

  getPlacerOrders(): Observable<any>{
    return  this.http.get(BASIC_URL+ 'api/admin/placedOrders', {
      headers: this.createAuthorizationHeaders(),
    })
  }

  changeOrderStatus(orderId:number, status: string): Observable<any>{
    return  this.http.get(BASIC_URL+ `api/admin/order/${orderId}/${status}`, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  postFAQ(productId:number, faqDto: any): Observable<any>{
    return  this.http.post(BASIC_URL+ `api/admin/faq/${productId}`, faqDto, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  getAnalytics(): Observable<any>{
    return  this.http.get(BASIC_URL+ 'api/admin/order/analytics', {
      headers: this.createAuthorizationHeaders(),
    })
  }


  private createAuthorizationHeaders(): HttpHeaders{
    return new HttpHeaders().set('Authorization', 'Bearer '+ UserStorageService.getToken())
  }
}
