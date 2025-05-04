import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AdminService} from "../../service/admin.service";

@Component({
  selector: 'app-post-ticket',
  templateUrl: './post-ticket.component.html',
  styleUrl: './post-ticket.component.css'
})
export class PostTicketComponent implements OnInit{

  ticketForm: FormGroup;
  listOfCategories : any[];
  listOfCompetitions: any[];
  selectedFile: File|null;
  imagePreview: string| ArrayBuffer | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private snackBar: MatSnackBar,
              private adminService: AdminService) {
  }


  onFileSelected(event: any){
    this.selectedFile =event.target.files[0];
    this.previewImage();
  }

  previewImage(){
    const reader = new FileReader();
    reader.onload=()=>{
      this.imagePreview= reader.result;
    }
    reader.readAsDataURL(this.selectedFile);

  }

  ngOnInit(): void{
    this.ticketForm= this.fb.group({
      categoryId: [null, [Validators.required]],
      title: [null, [Validators.required]],
      price: [null,[Validators.required]],
      description: [null,[Validators.required]],
      competitionId: [null, [Validators.required]],
    });
    this.getAllCategories();
    this.getAllCompetitions();
  }

  getAllCategories(){
    this.adminService.getAllAllTicketCategories().subscribe(res=>{
      this.listOfCategories = res;
    })

    console.log(this.listOfCategories)
  }

  getAllCompetitions(){
    this.adminService.getAllCompetitions().subscribe(res=>{
      this.listOfCompetitions = res;
    })
    console.log(this.listOfCompetitions);
  }

  addTicket():void{
    if(this.ticketForm.valid){
      const formData: FormData = new FormData();
      //formData.append('img', this.selectedFile);
      formData.append('competitionId', this.ticketForm.get('competitionId').value);
      formData.append('categoryId', this.ticketForm.get('categoryId').value);
      formData.append('title', this.ticketForm.get('title').value);
      formData.append('description', this.ticketForm.get('description').value);
      formData.append('price', this.ticketForm.get('price').value);

      this.adminService.addTicket(formData).subscribe((res)=>{
        if(res.id!=null){
          this.snackBar.open('Ticket crée avec succès!', 'Fermer',{
            duration: 5000
          });
          this.router.navigateByUrl('/admin/dashboard');
        } else {
          this.snackBar.open(res.message, 'ERROR',{
            duration: 5000
          })
        }
      })
    }else {
      for(const i in this.ticketForm.controls){
        this.ticketForm.controls[i].markAsDirty();
        this.ticketForm.controls[i].updateValueAndValidity();
      }
    }

  }

}
