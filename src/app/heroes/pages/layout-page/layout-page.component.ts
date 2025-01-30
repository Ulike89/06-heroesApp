import { Component } from '@angular/core';
import { AuthMicrosoftService } from '../../../auth/services/auth.microsoft-service';
import { Router } from '@angular/router';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-layout-page',
  standalone: false,
  
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]

  constructor(
    private authService: AuthMicrosoftService,
    private router: Router
  ) {}

  get user():User | undefined {
    const user = this.authService.getUser();
    if (user){
      return {
        id:    0,
        user:  user,
        email: user
      };
    }
    return undefined;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }
}