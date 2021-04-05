import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DialogService, IAlert } from '../../services/util/dialog.service';
import { EquipamentoDetalheComponent } from '../detalhe/equipamento-detalhe.component';
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
  selector: 'EquipamentoComponent',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.css']
})
export class EquipamentoComponent implements OnInit {

  equipamentoDetalheModalForm = EquipamentoDetalheComponent;

  @ViewChild('form', { static: true }) form: NgForm;
  @Input() instance: any;


  message: IAlert;

  equipamentos: any = {};
  
  private _index: number;     

  constructor(private modal: NgbModal,
    private dialog: DialogService,
    private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.equipamentos = this.instance;
  }

  incluir(){
    let iProximo = Math.max.apply( Math,  this.equipamentos.map(e => e.id));
    iProximo++;
    this.detalhar( undefined, iProximo);
  }

  detalhar(equipamento, i) {
    this._index = i;
    const modalRef = this.modal.open(
      this.equipamentoDetalheModalForm, {
      backdrop: 'static', centered: true, keyboard: false, size: 'lg'
    }
    );

    modalRef.componentInstance.instance = equipamento;

    modalRef.result.then((result) => {
      if (result && result != 'close') {
        this.equipamentos.dirty = true;
        if (this._index < this.equipamentos.length ) {
          this.equipamentos[this._index] = result;
          //this.equipamentos.splice(this._index, 1);
        }else{
          result.id = this._index;
          this.equipamentos.push(result);
        }
      }
    }).catch((result) => {
      console.log(result);
    });
  }


  fechar(){
    this.activeModal.close(this.equipamentos);
  }

}