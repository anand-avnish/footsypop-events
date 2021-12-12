import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { RouterModule } from '@angular/router';

import {MatTabsModule} from '@angular/material/tabs';

const route = [
  { path: '', component: ServiceComponent },
];


@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild(route)
  ]
})
export class ServiceModule { }
