import { Component, OnInit } from '@angular/core';
import { ConsultantService } from '../../services/consultant.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-reward',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css'],
  standalone:true,
  imports:[NgFor]
})
export class RewardComponent implements OnInit {
  consultants: any[] = [];

  constructor(private consultantService:ConsultantService) {}

  ngOnInit() {
    // Fetching the list of consultants
    this.consultants = this.consultantService.getConsultants();
  }

  // Method to nominate a consultant for a reward
  nominateForReward(consultant: any) {
    if (!consultant.rewarded) {
      consultant.rewarded = true; // Marking the consultant as rewarded
      alert(`${consultant.username} has been nominated for a reward!`);
    } else {
      alert(`${consultant.username} is already nominated for a reward.`);
    }
  }
}