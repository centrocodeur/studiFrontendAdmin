import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostTicketComponent } from './components/post-ticket/post-ticket.component';
import { PostTicketCategoryComponent } from './components/dashboard/post-ticket-category/post-ticket-category.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatOption, MatSelect} from "@angular/material/select";
import {
  MatCard, MatCardActions, MatCardAvatar,
  MatCardContent, MatCardFooter,
  MatCardHeader,
  MatCardImage, MatCardLgImage,
  MatCardSmImage,
  MatCardTitle
} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import { UpdateTicketComponent } from './components/update-ticket/update-ticket.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostTicketComponent,
    PostTicketCategoryComponent,
    UpdateTicketComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatError,
    MatButton,
    MatInput,
    MatIcon,
    MatSelect,
    MatOption,
    MatCard,
    MatDivider,
    MatCardHeader,
    MatCardImage,
    MatCardSmImage,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatCardFooter,
    MatCardAvatar,
    MatCardLgImage
  ]
})
export class AdminModule { }
