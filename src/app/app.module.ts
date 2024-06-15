import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { RepairorderFormComponent } from './repairorder-form/repairorder-form.component';
import { RepairorderService } from './repairorder.service';
import { InvoiceService } from './invoice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    InvoiceFormComponent,
    FirstpageComponent,
    RepairorderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RepairorderService,InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
