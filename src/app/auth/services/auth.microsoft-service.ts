import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthMicrosoftService {
  constructor(private msalService: MsalService) {}

  login() {
    this.msalService.loginRedirect();
  }

  logout() {
    this.msalService.logoutRedirect();
  }

  getUser() {
    const account = this.msalService.instance.getActiveAccount();
    return account ? account.username : null;
  }

  isAuthenticated(): boolean {
    return this.msalService.instance.getActiveAccount() !== null;
  }
}