import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Livro } from '../../model/Livro';
@Component({
    selector:'cadastro-livro',
    styleUrls:['cadastrarLivro.scss'],
    templateUrl:'cadastrarLivro.html'
})
export class CadastroLivro implements OnInit {

    public formGroup:FormGroup;
    public livro:Livro = new Livro();
    public programador:string='Fernando Santian';

    constructor(private fb:FormBuilder){

    }

    ngOnInit(){
        /**
         * Criando as validações para os campos da tela (Campo Obrigatório)
         */

        
        this.formGroup = this.fb.group({
            titulo: [null, Validators.required],
            autor: [null, Validators.required],
            dataCadastro: [null, Validators.required],
            anoEdicao: [null, Validators.required],
            editora: [null, Validators.required],
            quantidade: [null, Validators.required],
            classificacao: [null],
            observacao: [null]

        });

        
        }

        public salvar(){
            if(this.formGroup.invalid){
                return;
            }
            alert('Salvo com sucesso!');
        }
        public cancelar(){
            alert('Foi cancelado!');
        }
       
}
