import { ServerComponent } from './server/server.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningalertComponent } from './alerts/warningalert/warningalert.component';
import { SuccessalertComponent } from './alerts/successalert/successalert.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningalertComponent,
    SuccessalertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
