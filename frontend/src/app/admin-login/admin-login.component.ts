import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeAttendanceComponent } from '../employee-attendance/employee-attendance.component';


@Component({
  selector: 'app-admin-login',
  imports: [FormsModule, ReactiveFormsModule,RouterOutlet, RouterLink, EmployeeAttendanceComponent],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  
onSubmit() {
  const { username, password } = this.loginForm.value;
  if (username === 'admin' && password === 'admin123') {
  // Navigate to home page and replace the current URL
   this.router.navigateByUrl('/', { replaceUrl: true });
   } else {
   alert('Invalid credentials');
   }
  }
  

  
}



