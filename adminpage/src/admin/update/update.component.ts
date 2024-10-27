import { Component, NgModule, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ConsultantService } from '../../services/consultant.service';
import { NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  standalone:true,
  imports:[NgFor,FormsModule]
})
export class UpdateComponent implements OnInit {
  consultant: any;

  constructor(
    private consultantService: ConsultantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.consultant = this.consultantService.getConsultants().find(c => c.id === id);
  }

  updateConsultant(form: any) {
    if (form.valid) {
      this.consultantService.updateConsultant(form.value);
      alert('Consultant updated successfully!');
    }
  }
}