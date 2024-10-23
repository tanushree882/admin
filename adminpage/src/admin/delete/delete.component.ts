import { Component, NgModule } from '@angular/core';
import { ConsultantService } from '../../services/consultant.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule,FormsModule]
})
export class DeleteComponent {
  consultantId: number | null = null;

  constructor(private consultantService: ConsultantService) {}

  // Method to delete a consultant by ID
  deleteConsultant(form: NgForm) {
    if (this.consultantId) {
      this.consultantService.deleteConsultant(this.consultantId).subscribe(success => {
        if (success) {
          alert(`Consultant with ID ${this.consultantId} deleted successfully!`);
          this.consultantId = null; // Clear the input after deletion
          form.reset(); // Reset the form
        } else {
          alert(`Consultant with ID ${this.consultantId} not found.`);
        }
      });
    } else {
      alert('Please enter a valid Consultant ID.');
    }
  }
}
