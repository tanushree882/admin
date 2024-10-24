import { Component, OnInit } from '@angular/core';
import { ConsultantService } from '../../services/consultant.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone:true,
  imports:[NgFor,RouterModule]
})
export class ListComponent {
  restUserData: ConsultantService;
  router: any;
  constructor(restUserDataRef:ConsultantService)
  {
    this.restUserData=restUserDataRef;

  }
  // consultants: any[] = [];

  // constructor(private consultantService: ConsultantService, public router: Router) {}

  // ngOnInit() {
  //   this.consultants = this.consultantService.getConsultants();
  //   console.log(this.consultants); // Log the consultants to check if data is fetched
  // }
  // // Method to delete a consultant
  // deleteConsultant(id: number) {
  //   this.consultantService.deleteConsultant(id);
  //   this.consultants = this.consultantService.getConsultants(); // Refresh the list
  // }

  // Method to navigate to the update page
  navigateToUpdatePage(id: number) {
    this.router.navigate(['/update', id]);
  }

  // // Method to nominate a consultant for reward
  // nominateForReward(id: number) {
  //   // Implement the logic to nominate a consultant for reward
  //   console.log('Nominate for Reward: ', id);
  // }
}