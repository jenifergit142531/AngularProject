import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccessModule } from './access/access.module';
import { AddressComponent } from './address/address.component';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
 {path:"about",component:AboutComponent},
  {path:"contact",
  component:ContactComponent,
children:[{path:"add",component:AddressComponent},
{path:"edit/:id",component:AddressComponent}
]
},
{path:"access",loadChildren:()=>import('./access/access.module').then(opt=>opt.AccessModule)},
{path:"login",loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
