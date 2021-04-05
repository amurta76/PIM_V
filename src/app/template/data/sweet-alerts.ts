import swal from 'sweetalert2';

export function confirmDeleteButton(message?: string, confirmText?:string, cancelText?:string): Promise<boolean> {
   return swal({
       title: 'Exclusão',
       html: message || "Deseja excluir o registro atual?",
       type: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#0CC27E',
       cancelButtonColor: '#FF586B',
       confirmButtonText: confirmText || 'Sim, excluir!',
       cancelButtonText: cancelText || 'Não, cancelar!',
       confirmButtonClass: 'btn btn-success btn-raised mr-5',
       cancelButtonClass: 'btn btn-danger btn-raised',
       buttonsStyling: false
   }).then(function(opcao) {
       if (opcao.dismiss)
          return false;
       return true;
   }).catch(() => {
       return false;
   })
}


export function confirmCancelButton(message?: string, confirmText?:string, cancelText?:string): Promise<boolean> {
   return swal({
       title: 'Cancelamento',
       html: message || "Deseja cancelar o registro atual?",
       type: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#0CC27E',
       cancelButtonColor: '#FF586B',
       confirmButtonText: confirmText || 'Sim, cancelar!',
       cancelButtonText: cancelText || 'Não, manter!',
       confirmButtonClass: 'btn btn-success btn-raised mr-5',
       cancelButtonClass: 'btn btn-danger btn-raised',
       buttonsStyling: false
   }).then(function(opcao) {
       if (opcao.dismiss)
          return false;
       return true;
   }).catch(() => {
       return false;
   })
}

export function deleteSuccess() {
   swal("Excluído!", "Registro excluído com sucesso!", "success");
}

export function deleteCancel() {
   swal("Cancelado!", "Operação cancelada!", "error");
}

export function restError(message?: string) {
   swal("Erro!", message || "Erro não especificado", "error");
}
