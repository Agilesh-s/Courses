import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {

  constructor() { }

  courseTitle = ""
  courseDescription = ""
  courseDuration = ""
  courseDate = ""
  courseVenue = ""

  readValues = ()=>{
    let data = {
      "courseTitle" : this.courseTitle,
      "courseDescription" : this.courseDescription,
      "courseDuration" : this.courseDuration,
      "courseDate" : this.courseDate,
      "couurseVenue" : this.courseVenue
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
