import { Component } from "@angular/core";
import { Curso} from "../../model/Curso";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'cadastro-curso',
    styleUrls: ['cadastrarCurso.scss'],
    templateUrl: 'cadastrarCurso.html'
})
export class CadastroCurso {

    public formGroup: FormGroup;
    public curso: Curso = new Curso();
    public programador: string = 'Fernando';


    constructor(private fb:FormBuilder){
    }
    ngOnInit(){
        /**
         * Criando as validações para os campos da tela (Campo Obrigatório)
         */

        
        this.formGroup = this.fb.group({
                nome: [null, Validators.required],
                periodo: [null, Validators.required]
            });
        };

        
        
      

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