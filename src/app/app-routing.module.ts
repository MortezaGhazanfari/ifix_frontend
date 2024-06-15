import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { RepairorderFormComponent } from './repairorder-form/repairorder-form.component';

const routes: Routes = [
  { path: '', component: FirstpageComponent },
  { path: 'invoice', component: InvoiceFormComponent },
  {path: 'repairorder', component: RepairorderFormComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
