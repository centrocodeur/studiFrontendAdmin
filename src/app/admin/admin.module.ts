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
import {MatCard} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostTicketComponent,
    PostTicketCategoryComponent
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
    MatDivider
  ]
})
export class AdminModule { }
