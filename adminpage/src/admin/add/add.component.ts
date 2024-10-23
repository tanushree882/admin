import { Component } from '@angular/core';
import { ConsultantService } from '../../services/consultant.service';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AddComponent {
  username: string = '';

  constructor(private consultantService: ConsultantService) { }

  // Method to add consultant
  addConsultant(form: any) {
    if (form.valid) {
      this.consultantService.addConsultant(form.value);
      form.reset(); // Clear the form after submission
      alert('Consultant added successfully!');
    }
  }

 // Method to filter phone number input
 filterPhoneNumber(event: any) {
  const input = event.target;
  const value = input.value;

  // Remove all non-numeric characters
  input.value = value.replace(/[^0-9]/g, '');

  // Validate the length of the phone number
  if (input.value.length > 10) {
    input.value = input.value.slice(0, 10); // Limit to 10 digits
  }
}
}