import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ConsultantService } from '../../services/consultant.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
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