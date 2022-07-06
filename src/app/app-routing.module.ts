import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { VendaComponent } from './components/venda/venda.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'main', component: MainComponent },
  { path: 'venda', component: VendaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
