import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../service/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})
export class CompetitionComponent implements OnInit{

  competitions: any[]= [];
  public dataSource: any;
  searchCompetitionForm!: FormGroup;
  displayedColumns: string[] = ['id', 'name', 'compDate', 'compTime', 'site'];

 @ViewChild(MatPaginator) paginatoir!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;

  constructor(private adminService: AdminService,
              private fb: FormBuilder,
              private  snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
   this.getAllCompetitions();
   this.searchCompetitionForm = this.fb.group({
      title: [null, [Validators.required]]
    })

    /*this.adminService.getAllCompetitions().subscribe({
      next: data => {
        this.dataSource = data;
        this.dataSource= new MatTableDataSource(this.dataSource);
        this.dataSource.paginatoir= this.paginatoir;
        this.dataSource.sort = this.sort;
      },
      error: err => {console.log(err)}

    })*/


  }
  getAllCompetitions(){
    this.competitions= [];
    this.adminService.getAllCompetitions().subscribe(res =>{

      res.forEach(element=>{
        element.processedImg= 'data:image/jpeg;base64,' + element.byteImg;
        this.competitions.push(element);
        console.log(this.competitions)

      })
      this.dataSource = res;
      console.log(this.dataSource);
    })
  }


  submitForm(){
    this.competitions= [];
    const title = this.searchCompetitionForm.get('title')!.value;
    this.adminService.getAllTicketsByName(title).subscribe(res =>{
      res.forEach(element=>{
        element.processedImg= 'data:image/jpeg;base64,' + element.byteImg;
        this.competitions.push(element);
      })
    })
  }

  deleteCompetition( competitionId: any){
    this.adminService.deleteCompetition(competitionId).subscribe(res=>{
      if(res == null){
        this.snackBar.open('Ticket deleted Successfully!', 'Close', {
          duration: 5000
        });
        this.getAllCompetitions();
      } else{
        this.snackBar.open(res.message, 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    })
  }


}
