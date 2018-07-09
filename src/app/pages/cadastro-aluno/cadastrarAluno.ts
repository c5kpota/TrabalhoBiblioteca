import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Aluno } from '../../model/Aluno';
@Component({
    selector:'cadastro-aluno',
    styleUrls:['cadastrarAluno.scss'],
    templateUrl:'cadastrarAluno.html'
})
export class CadastroAluno implements OnInit {

    public formGroup:FormGroup;
    public aluno:Aluno = new Aluno();
    public programador:string='Fernando Santian';

    constructor(private fb:FormBuilder){

    }

    ngOnInit(){
        /**
         * Criando as validações para os campos da tela (Campo Obrigatório)
         */

        
        this.formGroup = this.fb.group({
            nome: [null, Validators.required],
            sobrenome: [null, Validators.required],
            cpf: [null, Validators.required],
            rg: [null, Validators.required],
            email: [null, Validators.required],
            dataNascimento: [null, Validators.required],
            telefone: [null, Validators.required],
            endereco: [null, Validators.required],
            numero: [null],
            bairro: [null, Validators.required],
            cidade: [null, Validators.required],
            cep: [null, Validators.required],
            graduacao: [null, Validators.required]


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
