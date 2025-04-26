import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../service/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  tickets: any[]= [];
  searchTicketForm!: FormGroup;

  constructor(private adminService: AdminService,
              private fb: FormBuilder,
              private  snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    this.getAllTickets();
    this.searchTicketForm = this.fb.group({
      title: [null, [Validators.required]]
    })
  }
  getAllTickets(){
    this.tickets= [];
    this.adminService.getAllTicket().subscribe(res =>{
      res.forEach(element=>{
        element.processedImg= 'data:image/jpeg;base64,' + element.byteImg;
        this.tickets.push(element);
      })
    })
    console.log(this.tickets)
  }


  submitForm(){
    this.tickets= [];
    const title = this.searchTicketForm.get('title')!.value;
    this.adminService.getAllTicketsByName(title).subscribe(res =>{
      res.forEach(element=>{
        element.processedImg= 'data:image/jpeg;base64,' + element.byteImg;
        this.tickets.push(element);
      })
    })
  }

  deleteTicket( ticketId: any){
    this.adminService.deleteTicket(ticketId).subscribe(res=>{
      if(res == null){
        this.snackBar.open('Ticket deleted Successfully!', 'Close', {
          duration: 5000
        });
        this.getAllTickets();
      } else{
        this.snackBar.open(res.message, 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    })
  }

}
