import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AdminService} from "../../service/admin.service";

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrl: './update-ticket.component.css'
})
export class UpdateTicketComponent implements OnInit{


  ticketId= this.activatedRoute.snapshot.params['ticketId']
  ticketForm: FormGroup;
  listOfCategories : any[];
  listOfCompetitions : any[];

  selectedFile: File|null;
  imagePreview: string| ArrayBuffer | null;
  existingImage: string|null=null;
  imgChanged= false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private snackBar: MatSnackBar,
              private adminService: AdminService,
              private activatedRoute: ActivatedRoute) {
  }

  onFileSelected(event: any){
    this.selectedFile =event.target.files[0];
    this.previewImage();
    this.imgChanged= true;
    this.existingImage=null;

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
     // name: [null, [Validators.required]],
      price: [null,[Validators.required]],
      title: [null, [Validators.required]],
      description: [null,[Validators.required]],
      competitionId: [null, [Validators.required]],
    });
    this.getAllCategories();
    this.getAllCompetitions();
    this.getProductById();
  }

  getAllCategories(){
    this.adminService.getAllAllTicketCategories().subscribe(res=>{
      this.listOfCategories = res;
    })
  }

  getAllCompetitions(){
    this.adminService.getAllCompetitions().subscribe(res=>{
      this.listOfCompetitions = res;
    })
  }

  getProductById(){
    this.adminService.getTicketById(this.ticketId).subscribe(res=>{
      this.ticketForm.patchValue(res);
      this.existingImage='data:image/jpeg;base64,' + res.byteImg;
    })
  }



  updateTicket():void{
    if(this.ticketForm.valid){
      const formData: FormData = new FormData();

      /*if (this.existingImage && this.selectedFile){
        formData.append('img', this.selectedFile);
      }*/

      formData.append('competitionId', this.ticketForm.get('competitionId').value);
      formData.append('categoryId', this.ticketForm.get('categoryId').value);
      //formData.append('name', this.ticketForm.get('name').value);
      formData.append('title', this.ticketForm.get('title').value);
      formData.append('description', this.ticketForm.get('description').value);
      formData.append('price', this.ticketForm.get('price').value);

      this.adminService.updateTicket(this.ticketId, formData).subscribe((res)=>{
        if(res.id!=null){
          this.snackBar.open('ticket updated Successfully!', 'Close',{
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
