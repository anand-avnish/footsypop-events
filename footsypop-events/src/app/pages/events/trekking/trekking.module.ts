import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrekkingComponent } from './trekking.component';
import { RouterModule } from '@angular/router';

const route = [
  { path: '', component: TrekkingComponent },
];


@NgModule({
  declarations: [
    TrekkingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class TrekkingModule { }
