import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Importaciones de MSAL
import { MsalModule, MsalService, MsalGuard, MsalBroadcastService, MsalRedirectComponent } from '@azure/msal-angular';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MsalModule.forRoot(new PublicClientApplication({
      auth: {
        clientId: '28715129-5ca3-48a3-9366-f2efb009d59c',  // Reemplaza con el Client ID de Azure AD
        authority: 'https://login.microsoftonline.com/d0e559f4-5d55-41a5-b439-a176e8bb2973',  // Reemplaza con tu Tenant ID
        redirectUri: 'http://localhost:4200',  // Redirección después de iniciar sesión
      }
    }), {
      interactionType: InteractionType.Redirect,  // O usa InteractionType.Popup
      authRequest: { scopes: ['user.read'] }, // Permisos de la API de Microsoft Graph
    }, {
      interactionType: InteractionType.Redirect,
      protectedResourceMap: new Map([
        ['https://graph.microsoft.com/v1.0/me', ['user.read']]
      ])
    })
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    MsalService,
    MsalGuard,
    MsalBroadcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }