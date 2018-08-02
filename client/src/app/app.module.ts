import { AdminModule } from './admin/admin.module';
import { LoginDialogModule } from './core/components/login-dialog/login-dialog.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { SignupDialogModule } from './core/components/signup-dialog/signup-dialog.module';
import { LoginDialogComponent } from './core/components/login-dialog/login-dialog.component';
import { SignupDialogComponent } from './core/components/signup-dialog/signup-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    SignupDialogComponent
  ],
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    LoginDialogModule,
    SignupDialogModule,
    MatOptionModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
