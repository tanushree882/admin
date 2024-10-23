import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  private consultants = [
    { id: 1, username: 'JohnDoe', phone: '1234567890', email: 'john@example.com', profile: 'Tax Expert' },
    { id: 2, username: 'JaneSmith', phone: '9876543210', email: 'jane@example.com', profile: 'Financial Consultant' }
  ];

  constructor() { }

  // Get all consultants
  getConsultants() {
    return this.consultants;
  }

  // Add a new consultant
  addConsultant(consultant: any) {
    consultant.id = this.consultants.length + 1;
    this.consultants.push(consultant);
  }

  // Delete a consultant by ID
  deleteConsultant(id: number): Observable<boolean> {
    const index = this.consultants.findIndex(c => c.id === id);
    if (index !== -1) {
      this.consultants.splice(index, 1);
      return of(true); // Simulate successful deletion
    }
    return of(false); // Simulate failure if not found
  }


  // Update consultant information
  updateConsultant(updatedConsultant: any) {
    const index = this.consultants.findIndex(c => c.id === updatedConsultant.id);
    if (index !== -1) {
      this.consultants[index] = updatedConsultant;
    }
  }
}
