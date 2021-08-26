import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unsave-contact-wa';
  formWA: FormGroup = new FormGroup({
    phone: new FormControl('62', [Validators.required])
  });
  constructor(
    private httpSvc: HttpClient
  ){}

  onSubmit(form: FormGroup): any {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.phone);
    if (form.valid) {
    const url = 'https://api.whatsapp.com/send';
    const headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    };
    const param = new HttpParams().set('phone', form.value.phone);
    this.httpSvc.get(url, { params: param, headers: headerOption.headers }).subscribe((response) => {
      console.log(response);
    });
    }
  }
}
