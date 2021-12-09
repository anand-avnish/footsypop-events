import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    event:['', [Validators.required]],
    message:['']
  });

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  events= ['Birthday', 'Corporate', 'Societal', 'Wedding'];

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}
