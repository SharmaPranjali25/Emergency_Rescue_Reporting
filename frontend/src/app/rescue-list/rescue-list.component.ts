import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-rescue-list',
  templateUrl: './rescue-list.component.html',
  imports: [NgForOf],
  styleUrls: ['./rescue-list.component.css']
})
export class RescueListComponent implements OnInit {
  employeeIds: any[] = [];

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.attendanceService.getRecognizedEmployees().subscribe((data :any)=> {
        this.employeeIds = data.recognized_ids;
        console.log(this.employeeIds);
      },
      error => {
        console.error('Error fetching recognized employees', error);
      }
    );
  }
}
