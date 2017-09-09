import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmailModule } from './modules/email/moduloemail.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';

// Components
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { SimpleTinyComponent } from './components/simple-tiny/simple-tiny.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalsComponent,
    ContactComponent,
    KeepersComponent,
    TiendaComponent,
    SimpleTinyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routing,
    EmailModule,
    AdminModule
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
