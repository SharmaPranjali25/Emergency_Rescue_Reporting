import { Component , NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RescueListComponent } from './rescue-list/rescue-list.component';


@Component({
  selector: 'app-root',
  imports: [DashboardComponent,FormsModule,AdminLoginComponent,RescueListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emergency_rescue_reporting';
}
