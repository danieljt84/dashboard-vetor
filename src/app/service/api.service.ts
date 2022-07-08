import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { catchError, Observable, ObservedValueOf } from 'rxjs';
import { CountItemVenda } from '../model/count-item-venda';
import { CountProdutoVenda } from '../model/count-produto-venda';
import { FaturamentoCusto } from '../model/faturamento-custo';
import { InfoCurvaABC } from '../model/infoCurvaABC';
import { MargemSecao } from '../model/margem-secao';
import { VendaByItem } from '../model/venda-Item';
import { VerbaTotalByWeekVersusVerbaUtilizadaByDay } from '../model/verba-total-versus-verba-utilizada-day';
import { VerbaTotalByWeekVersusVerbaUtilizadaByWeek } from '../model/verbatotalbyweekversusverbautilizadabyweek';
import { EventEmitterService } from './event-emitter.service';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  date: any;
  private url = "https://103.72.79.128:8081/";
  constructor(private http : HttpClient) {
    var today = new Date();
    this.date = today.toISOString().substring(0, 10).toString();
    EventEmitterService.get('date-event').subscribe(data=>{
       if(today.getMonth() != data[0]){
        let ano:number = data[1];
        let mes:number = Number.parseInt(data[0]);
        this.date = new Date(ano,mes+1,0).toISOString().substring(0, 10).toString();
        console.log(this.date);
       }else{
        this.date = today.toISOString().substring(0, 10).toString();
        console.log(this.date);
       }
    })
   }
  getVerbaUtilizada(): Observable<number>{
    return this.http.get<number>(this.url+"contasapagar/verbautilizada",{params:{date : this.date}})
   }
   getVerbaTotal(): Observable<number>{
    return this.http.get<number>(this.url+"venda/verbatotal",{params:{date : this.date}})
   }
   getPrevisaoVenda(): Observable<number>{
    return this.http.get<number>(this.url+"venda/previsao",{params:{date : this.date}})
   }
   getFaturamentoCustoByDate():Observable<FaturamentoCusto>{
    return this.http.get<FaturamentoCusto>(this.url+"venda/faturamentocusto",{params:{date : this.date}})
   }
  getVerbaDisponivel(): Observable<number>{
   return this.http.get<number>(this.url+"venda/verbadisponivel",{params:{date : this.date}})
  }
  getVerbaTotalByWeekVersusVerbaUtilizadaByWeek(): Observable<VerbaTotalByWeekVersusVerbaUtilizadaByWeek[]>{
    return this.http.get<VerbaTotalByWeekVersusVerbaUtilizadaByWeek[]>(this.url+"venda/verbatotalbyweekversusverbautilizadabyweek",{params:{date : this.date}})
  }
  getVerbaTotalByWeekVersusVerbaUtilizadaByDay(): Observable<VerbaTotalByWeekVersusVerbaUtilizadaByDay[]>{
    return this.http.get<VerbaTotalByWeekVersusVerbaUtilizadaByDay[]>(this.url+"venda/verbatotalbyweekversusverbautilizadabyday",{params:{date : this.date}})
  }
  getMargemBySecao(): Observable<MargemSecao[]>{
    return this.http.get<MargemSecao[]>(this.url+"margem/secao",{params:{date : this.date}})
  }
  getMargem(): Observable<number>{
    return this.http.get<number>(this.url+"margem",{params:{date : this.date}})
  }
  getCountItensVendaByDate(): Observable<CountItemVenda[]>{
    return this.http.get<CountItemVenda[]>(this.url+"venda/countitem",{params:{date : this.date}})
  }
  getCountProdutoVendaByDate(): Observable<CountProdutoVenda[]>{
    return this.http.get<CountProdutoVenda[]>(this.url+"venda/countproduto",{params:{date : this.date}})
  }
  getVendaByItem(): Observable<VendaByItem[]>{
    return this.http.get<VendaByItem[]>(this.url+"venda/faturamentobyitem",{params:{date : this.date}})
  }
  getInfoCurvaAbc():Observable<InfoCurvaABC[]>{
    return this.http.get<InfoCurvaABC[]>(this.url+"venda/infocurvaabc",{params:{date : this.date}})
  }
}
