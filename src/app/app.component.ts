import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unsave-contact-wa';
  correctValue: boolean | undefined;
  formWA: FormGroup = new FormGroup({
    phone: new FormControl('62', [Validators.required])
  });
  constructor(
  ){}

  onSubmit(form: FormGroup): any {
    if (form.valid) {
    this.correctValue = true;
    const url = 'https://api.whatsapp.com/send?phone=';
    window.open(url + form.value.phone);
    }
  }
}
