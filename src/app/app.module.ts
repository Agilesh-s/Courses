import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { ViewCourseComponent } from './view-course/view-course.component';

const appRoutes:Routes = [
  {
    path:"",component:AddCoursesComponent
  },
  {
    path:"view",component:ViewCourseComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddCoursesComponent,
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
