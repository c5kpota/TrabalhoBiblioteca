import { Component } from "@angular/core";
import { login } from "../../model/login";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'loginDeUsuario',
    styleUrls: ['loginUsuario.scss'],
    templateUrl: 'loginUsuario.html'
})
export class Login {

    public formGroup: FormGroup;
    public login: login = new login();
    public programador: string = 'Fernando';

    constructor(private fb:FormBuilder) {
        this.formGroup = fb.group({
            login: [Validators.required],
            senha: [Validators.required]
        });
    }

    ngOnInit(){
    

    
    }

    public salvar(){
        console.log(this.login);
        let user = JSON.stringify(this.login);
        localStorage.setItem('login', user);
        alert('Logado com sucesso');
    }

    public cancelar(){
        console.log('Foi cancelado login');
    }

}