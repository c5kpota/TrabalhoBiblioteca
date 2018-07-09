import { Component } from "@angular/core";
import { Editora } from "../../model/Editora";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'cadastro-editora',
    styleUrls: ['cadastrarEditora.scss'],
    templateUrl: 'cadastrarEditora.html'
})
export class CadastroEditora {

    public formGroup: FormGroup;
    public editora: Editora = new Editora();
    public programador: string = 'Fernando';

    constructor(private fb:FormBuilder) {
        this.formGroup = fb.group({
            nome: [null, Validators.required],
            cnpj: [null, Validators.required]
        });
    }

    public salvar(){
        console.log(this.editora);
        let user = JSON.stringify(this.editora);
        localStorage.setItem('Editora', user);
        alert('Editora salvo som sucesso');
    }

    public cancelar(){
        console.log('Foi cancelado o cadastro de editora');
    }

}