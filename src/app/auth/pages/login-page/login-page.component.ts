import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: false,
  
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {
  public userForm = new FormGroup({
      user: new FormControl<string>('', { nonNullable: true }),
      password: new FormControl<string>('', { nonNullable: true })
    });

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  onLogin(): void {
    if ( this.userForm.invalid ) return;
    this.authService.login(this.userForm.value.user!,this.userForm.value.password!)
    .subscribe( user => {
      this.router.navigate(['/']);
    });
  }
}