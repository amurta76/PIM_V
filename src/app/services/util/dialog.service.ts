import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as alertFunctions from '../../template/data/sweet-alerts';

//Interface
export interface IAlert {
   type: string;
   text: string;
}
@Injectable()
export class DialogService {

   private _message = new Subject<string>();
   alertMessage: string;

   constructor(
      private toastr: ToastrService
   ) {
      this._message.subscribe((message) => this.alertMessage = message);
      this._message.pipe(
         debounceTime(5000)
      ).subscribe(
         () => this.alertMessage = null);
   }

   showMessage(alert: IAlert): void {
      this._message.next(alert.text);
   }

   confirm(message?: string) {
      return new Promise(resolve => {
         return resolve(window.confirm(message || 'Confirma ?'));
      });
   }

   // Sweetalert calls
   confirmDelete(message?: string, confirmText?: string, cancelText?: string) {
      return new Promise(resolve => {
         return resolve(alertFunctions.confirmDeleteButton(message, confirmText, cancelText));
      });
   }

   // Sweetalert calls
   confirmCancel(message?: string, confirmText?: string, cancelText?: string) {
      return new Promise(resolve => {
         return resolve(alertFunctions.confirmCancelButton(message, confirmText, cancelText));
      });
   }



   deleteSuccess() {
      alertFunctions.deleteSuccess();
   }

   deleteCancel() {
      alertFunctions.deleteCancel();
   }

   restError(message?: string) {
      alertFunctions.restError(message);
   }

   // Toastr calls
   success(message?: string) {
      this.toastr.success(message || '', 'Sucesso!', { enableHtml: true });
   }

   error(message?: string) {
      this.toastr.error(message || '', 'Erro!', { enableHtml: true, disableTimeOut: true, closeButton: true, tapToDismiss: true });
   }

   info(message?: string) {
      this.toastr.info(message || '', 'Informação', { enableHtml: true });
   }

   warning(message?: string) {
      this.toastr.warning(message || '', 'Atenção!', { enableHtml: true });
   }

   dismiss() {
      this.toastr.clear();
   }

}
