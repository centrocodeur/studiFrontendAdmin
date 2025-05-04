import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AdminService} from "../../service/admin.service";

@Component({
  selector: 'app-post-competition',
  templateUrl: './post-competition.component.html',
  styleUrl: './post-competition.component.css'
})
export class PostCompetitionComponent implements OnInit{

  competitionForm: FormGroup;
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
    this.competitionForm= this.fb.group({
      name: [null, [Validators.required]],
      date: [null, [Validators.required]],
      time: [null,[Validators.required]],
      site: [null,[Validators.required]],
      city: [null,[Validators.required]]
    });
    //this.getAllCategories();
  }



  addCompetition():void{
    if(this.competitionForm.valid){
      const formData: FormData = new FormData();
      formData.append('img', this.selectedFile);
      formData.append('name', this.competitionForm.get('name').value);
      formData.append('compDate', this.competitionForm.get('date').value);
      formData.append('compTime', this.competitionForm.get('time').value);
      formData.append('site', this.competitionForm.get('site').value);
      formData.append('city', this.competitionForm.get('city').value);

      this.adminService.addCompetition(formData).subscribe((res)=>{
        if(res.id!=null){
          this.snackBar.open('Competition créée avec succès!', 'Fermer',{
            duration: 5000
          });
          this.router.navigateByUrl('/admin/competitions');
        } else {
          this.snackBar.open(res.message, 'ERROR',{
            duration: 5000
          })
        }
      })
    }else {
      for(const i in this.competitionForm.controls){
        this.competitionForm.controls[i].markAsDirty();
        this.competitionForm.controls[i].updateValueAndValidity();
      }
    }

  }

}
