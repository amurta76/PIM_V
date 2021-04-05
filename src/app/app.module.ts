import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { EquipamentoComponent } from './equipamento/listagem/equipamento.component';
import { EquipamentoDetalheComponent } from './equipamento/detalhe/equipamento-detalhe.component'
import { UsuarioComponent } from './usuario/listagem/usuario.component';
import { UsuarioDetalheComponent } from './usuario/detalhe/usuario-detalhe.component'

import { UtilModule } from './util/util.module';
import { DialogService } from './services/util/dialog.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr)


@NgModule({
  declarations: [
    AppComponent,
    EquipamentoComponent,
    EquipamentoDetalheComponent,
    UsuarioComponent,
    UsuarioDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    NgbModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    UtilModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    NgxSpinnerModule,
    FontAwesomeModule,
  ],
  providers: [
    DialogService,
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent,
    EquipamentoComponent,
    EquipamentoDetalheComponent,
    UsuarioComponent,
    UsuarioDetalheComponent]
})

export class AppModule {
  NgbModule
}