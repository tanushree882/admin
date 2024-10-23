import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AddComponent } from "../admin/add/add.component";
import { FormsModule, NgForm } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,RouterModule,MatToolbarModule,MatButtonModule,MatListModule,MatCardModule,MatFormFieldModule,MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adminpage';
}
