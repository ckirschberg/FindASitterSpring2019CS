import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login', // name of component
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]], // multiple validators
        password: ['', Validators.required] // Single validator
      }
    )
  }

  onSubmit() : void {
    this.snackBar.open('One second, logging in..', 'Close', {
      duration: 2000,
    });

    console.log(this.loginForm);

    if (this.loginForm.valid) {
      // Send the data to the server to verify the user login
    }
    else {
      // Show error message or something else.
    }

  }


}
