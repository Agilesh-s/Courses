import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.fetchData()
   }

  fetchData = ()=>{
    return this.myApi.courseList().subscribe(
      (data) =>{
        this.courseData = data
      }
    )
  }

  courseData:any = []

  ngOnInit(): void {
  }

}
