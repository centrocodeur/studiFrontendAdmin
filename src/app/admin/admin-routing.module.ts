import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {PostTicketCategoryComponent} from "./components/dashboard/post-ticket-category/post-ticket-category.component";
import {PostTicketComponent} from "./components/post-ticket/post-ticket.component";
import {UpdateTicketComponent} from "./components/update-ticket/update-ticket.component";
import {PostCompetitionComponent} from "./components/post-competition/post-competition.component";
import {CompetitionComponent} from "./components/competition/competition.component";
import {AnalyticsComponent} from "./components/analytics/analytics.component";

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'category', component: PostTicketCategoryComponent},
  {path: 'ticket', component: PostTicketComponent},
  {path: 'ticket/:ticketId', component: UpdateTicketComponent},
  {path: 'postcompetition', component: PostCompetitionComponent},
  {path: 'competitions', component: CompetitionComponent},
  {path: 'analytics', component: AnalyticsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
