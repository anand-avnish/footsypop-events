import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

  durationInSeconds = 5;

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
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  async onSubmit() {
    const value = {...this.contact.value};
    if (!this.contact.invalid) {
      const form = value;
      console.log(value);
      try {
        const headers = await new HttpHeaders({ 'Content-Type': 'application/json' });
        let res = this.http.post('https://usebasin.com/f/e5b68a625812',
          {Name:form.name, Email:form.email, Mobile_Number:form.phone, Event: form.event, Message: form.message},
          { 'headers': headers }).subscribe((response)=>{
            // console.log(response);
            this.openSnackBar("Thank you for contacting us. We will get to you soon!!", "OK");
            this.router.navigate(['/home'], { relativeTo: this.activeRoute.parent });
          });
        // console.log(res);
      } catch (error) {
        console.log(error);

      }
    }
  }

}
