import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule } from '@angular/router';

import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import {MatCardModule} from '@angular/material/card';

const route = [
  { path: '', component: GalleryComponent },
];


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryModule,
    LightboxModule,
    MatCardModule,
    RouterModule.forChild(route)
  ]
})
export class GallModule { }
