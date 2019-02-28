import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login', // name of component
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  // DI - Dependency injection
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
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
      // navigate after successful login.
      this.router.navigate(['portal/display-quiz']);
    }
    else {
      // Show error message or something else.

    }

  }


}
