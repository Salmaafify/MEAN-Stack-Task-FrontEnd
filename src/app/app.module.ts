import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrordataComponent } from './Components/errordata/errordata.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './Services/login.service';
import { AddNewContactComponent } from './Components/add-new-contact/add-new-contact.component';
import { EditContactComponent } from './Components/edit-contact/edit-contact.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path: 'contacts', component: ContactsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactsComponent,
    ErrordataComponent,
    AddNewContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
