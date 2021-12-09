import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';

const route = [
  { path: '', component: AboutComponent },
];


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(route)
  ]
})
export class AboutModule { }
