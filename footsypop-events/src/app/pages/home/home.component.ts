import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    {'image': '../../../assets/photos/fig60.jpg', 'title':'WEDDING', 'text':'A WEDDING IS A ONCE IN A LIFETIME EXPERIENCE!!!!'},
    {'image': '../../../assets/photos/fig63.jpg', 'title':'BIRTHDAY', 'text':'WHEN YOU THINK OF SUCH AN EVENT SIMPLY THINK FOOTSYPOP EVENTS!!!!'},
    {'image': '../../../assets/photos/fig39.jpg', 'title':'CORPORATE', 'text':'EVERY EVENT SHOULD BE PERFECT'},
    {'image': '../../../assets/photos/fig57.jpg', 'title':'SOCIETAL', 'text':'EVERY EVENT SHOULD BE PERFECT'},
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
