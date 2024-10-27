import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgFor } from '@angular/common';




@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  public consultants = [
    { id: 1, username: 'JohnDoe', phone: '1234567890', email: 'john@example.com', profile: 'Tax Expert' ,rating:'5',No_of_projects:'5'},
    { id: 2, username: 'JaneSmith', phone: '9876543210', email: 'jane@example.com', profile: 'Business Consultant',rating:'4',No_of_projects:'4' },
    { id: 3, username: 'Shubh', phone: '9876543210', email: 'jane@example.com', profile: 'HR Consultant',rating:'3',No_of_projects:'3' },
    { id: 4, username: 'Ram', phone: '9876543210', email: 'jane@example.com', profile: 'Advisory Consultant',rating:'5',No_of_projects:'6' },
    { id: 5, username: 'Raju', phone: '9876543210', email: 'jane@example.com', profile: 'Consultant',rating:'2',No_of_projects:'4' },
    { id: 6, username: 'Ravi', phone: '9876543210', email: 'jane@example.com', profile: 'Consultant2',rating:'1',No_of_projects:'10' }
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
