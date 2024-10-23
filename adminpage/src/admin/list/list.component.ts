import { Component, OnInit } from '@angular/core';
import { ConsultantService } from '../../services/consultant.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  consultants: any[] = [];

  constructor(private consultantService: ConsultantService) {}

  ngOnInit() {
    this.consultants = this.consultantService.getConsultants();
  }

  // Method to delete a consultant
  deleteConsultant(id: number) {
    this.consultantService.deleteConsultant(id);
    this.consultants = this.consultantService.getConsultants(); // Refresh the list
  }
}
