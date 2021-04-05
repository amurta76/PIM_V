import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DialogService, IAlert } from '../../services/util/dialog.service';


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
  selector: 'EquipamentoDetalheComponent',
  templateUrl: './equipamento-detalhe.component.html',
  styleUrls: ['./equipamento-detalhe.component.css']
})
export class EquipamentoDetalheComponent implements OnInit {


  @ViewChild('form', { static: true }) form: NgForm;
  @Input() instance: any;
  equipamento: any = {};

  message: IAlert;

  constructor(private modal: NgbModal,
    private dialog: DialogService) { }

  ngOnInit() {
    if (this.instance) {
      this.equipamento = this.instance;
    } else {
      this.equipamento = {nome:"", quantidade:0};
    }    
  }

}