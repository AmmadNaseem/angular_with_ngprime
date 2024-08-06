import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import PrimeNG modules
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';




export const importedModules=[
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    CheckboxModule,
    InputTextModule,
  

    
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [importedModules],
  bootstrap: [AppComponent]
})
export class AppModule { }
