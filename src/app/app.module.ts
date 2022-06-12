import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/main/card/card.component';
import { MainComponent } from './components/main/main.component';
import { ChartFaturamentoComponent } from './components/main/chart-faturamento/chart-faturamento.component';
import { ChartVerbaComponent } from './components/main/chart-verba/chart-verba.component';
import { ChartTermometroComponent } from './components/main/chart-termometro/chart-termometro.component';
import { ChartVerbaDiariaComponent } from './components/main/chart-verba-diaria/chart-verba-diaria.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/shared/nav/nav.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from './components/shared/modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    ChartFaturamentoComponent,
    ChartVerbaComponent,
    ChartTermometroComponent,
    ChartVerbaDiariaComponent,
    SignInComponent,
    NavComponent
  ],
  entryComponents:[
    ModalComponent
  ],
  imports: [BrowserModule,BrowserAnimationsModule, AppRoutingModule, NgChartsModule,FormsModule,
    ReactiveFormsModule, BrowserAnimationsModule,NgbModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
