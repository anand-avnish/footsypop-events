import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MatCarouselModule } from '@ngmodule/material-carousel';

const route = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatCarouselModule,
    RouterModule.forChild(route)
  ]
})
export class HomeModule { }
