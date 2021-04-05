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
  selector: 'UsuarioDetalheComponent',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit {


  @ViewChild('form', { static: true }) form: NgForm;
  @Input() instance: any;
  usuario: any = {};

  message: IAlert;

  constructor(private modal: NgbModal,
    private dialog: DialogService) { }

  ngOnInit() {
    if (this.instance) {
      this.usuario = this.instance;
    } else {
      this.usuario = { nome: "", perfil: "", senha: "" };
    }
  }

}