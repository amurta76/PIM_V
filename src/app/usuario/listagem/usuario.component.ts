import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DialogService, IAlert } from '../../services/util/dialog.service';
import { UsuarioDetalheComponent } from '../detalhe/usuario-detalhe.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'UsuarioComponent',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioDetalheModalForm = UsuarioDetalheComponent;

  @ViewChild('form', { static: true }) form: NgForm;
  @Input() instance: any;


  message: IAlert;

  usuarios: any = {};
  
  private _index: number;     

  constructor(private modal: NgbModal,
    private dialog: DialogService,
    private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.usuarios = this.instance;
  }

  incluir(){
    let iProximo = Math.max.apply( Math,  this.usuarios.map(e => e.id));
    iProximo++;
    this.detalhar( undefined, iProximo);
  }


  detalhar(usuario, i) {
    this._index = i;
    const modalRef = this.modal.open(
      this.usuarioDetalheModalForm, {
      backdrop: 'static', centered: true, keyboard: false, size: 'lg'
    }
    );

    modalRef.componentInstance.instance = usuario;

    modalRef.result.then((result) => {
      if (result && result != 'close') {
        this.usuarios.dirty = true;
        if (this._index < this.usuarios.length ) {
          this.usuarios[this._index] = result;
          //this.equipamentos.splice(this._index, 1);
        }else{
          result.id = this._index;
          this.usuarios.push(result);
        }
      }
    }).catch((result) => {
      console.log(result);
    });
  }


  fechar(){
    this.activeModal.close(this.usuarios);
  }

}