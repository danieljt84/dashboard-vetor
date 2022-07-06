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
import { ModalComponent } from './components/shared/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CardInfoVerbaDisponivelComponent } from './components/main/card-info/card-info-verba-disponivel/card-info-verba-disponivel.component';
import { CardVerbaTotalComponent } from './components/main/card-info/card-verba-total/card-verba-total.component';
import { CardVerbaUtilizadaComponent } from './components/main/card-info/card-verba-utilizada/card-verba-utilizada.component';
import { CardPrevisaoVendaComponent } from './components/main/card-info/card-previsao-venda/card-previsao-venda.component';
import { DataTableMargemSetorComponent } from './components/main/data-table-margem-setor/data-table-margem-setor.component';
import {TableModule} from 'primeng/table';
import { CardMargemComponent } from './components/shared/card-margem/card-margem.component';
import { CardDateShopComponent } from './components/shared/card-date-shop/card-date-shop.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { VendaComponent } from './components/venda/venda.component';
import { ChartQuantidadeItemComponent } from './components/venda/chart-quantidade-item/chart-quantidade-item.component';
import { ChartQuantidadeProdutoComponent } from './components/venda/chart-quantidade-produto/chart-quantidade-produto.component';
import { ChartQuantidadeVendaItemComponent } from './components/venda/chart-quantidade-venda-item/chart-quantidade-venda-item.component';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataTableCurvaAbcComponent } from './components/venda/data-table-curva-abc/data-table-curva-abc.component';







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
    NavComponent,
    CardInfoVerbaDisponivelComponent,
    CardVerbaTotalComponent,
    CardVerbaUtilizadaComponent,
    CardPrevisaoVendaComponent,
    DataTableMargemSetorComponent,
    CardMargemComponent,
    CardDateShopComponent,
    LoadingComponent,
    VendaComponent,
    ChartQuantidadeItemComponent,
    ChartQuantidadeProdutoComponent,
    ChartQuantidadeVendaItemComponent,
    DataTableCurvaAbcComponent,
  ],
  entryComponents:[
    ModalComponent
  ],
  imports: [BrowserModule,BrowserAnimationsModule, AppRoutingModule, NgChartsModule,FormsModule,
    ReactiveFormsModule, BrowserAnimationsModule, 
    NgbModule,HttpClientModule,TableModule,MatDatepickerModule,MatMomentDateModule ,MatNativeDateModule,MatFormFieldModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
