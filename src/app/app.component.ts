import { Component } from '@angular/core';
import { AuthMicrosoftService } from './auth/services/auth.microsoft-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'heroesApp';
}
