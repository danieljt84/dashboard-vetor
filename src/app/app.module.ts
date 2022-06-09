import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/main/card/card.component';
import { MainComponent } from './components/main/main.component';
import { ChartFaturamentoComponent } from './components/main/chart-faturamento/chart-faturamento.component';
import { ChartVerbaComponent } from './components/main/chart-verba/chart-verba.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    ChartFaturamentoComponent,
    ChartVerbaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
