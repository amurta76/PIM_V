import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogService, IAlert } from '../../services/util/dialog.service';
import { Subject, Observable } from 'rxjs';

@Component({
   selector: 'app-modal-simples',
   template: `
   <div class="modal-header">
      <h5 class="modal-title">{{titulo}}</h5>
      <button type="button" *ngIf="podeFechar==true" class="close" aria-label="Close" id="btnFechar"   (click)="activeModal.close('close')">
         <span aria-hidden="true">&times;</span>
      </button>
   </div>
   <div class="modal-body" style="padding:0 1rem;">
      <ng-content ></ng-content>
      <br *ngIf="labelSalvar == 'Salvar'"/>
      <ngb-alert *ngIf="message" type="{{message.type}}" (close)="message = null">
         {{ message.text }}
      </ngb-alert>
   </div>
   <div class="modal-footer">
      <ng-content select="[botoes]" ></ng-content>
      <button type="button" class="btn btn-raised btn-success mr-1" (click)="salvar()" *ngIf="item"> {{labelSalvar}} </button>
      <button type="button" class="btn btn-raised btn-secondary" (click)="activeModal.close('close')" *ngIf="podeFechar==true"> Fechar </button>
   </div>
  `,
   styles: []
})
export class ModalSimplesComponent implements OnInit {

   @Input() titulo: string;
   @Input() item: any;
   @Input() form: NgForm;
   @Input() labelSalvar?: string;
   @Input() podeFechar?: boolean = true;

   @Output() salvarEvent?: EventEmitter<any> = new EventEmitter();

   @Output() antesSalvarEvent?: EventEmitter<any> = new EventEmitter();

   message: IAlert;

   constructor(public activeModal: NgbActiveModal,
      private dialog: DialogService) {
   }

   ngOnInit() {
      if (!this.labelSalvar) {
         this.labelSalvar = 'Salvar';
      }
   }

   salvar() {
      if (this.antesSalvarEvent.observers.length > 0) {
         this.antesSalvarEvent.emit(this.item);
      }

      if (this.salvarEvent.observers.length > 0) {
         this.salvarEvent.emit(this.item);
      } else {
         this.message = null;
         if (this.form.invalid) {
            Object.keys(this.form.controls).forEach(key => {
               this.form.controls[key].markAsTouched();
            });
            this.showMessage({
               type: 'danger',
               text: "Existem informações inválidas ou nulas."
            });
            return;
         }
         this.activeModal.close(this.item);
      }
   }

   showMessage(message: IAlert) {
      this.message = message;
      this.dialog.showMessage(message);
   }

}
