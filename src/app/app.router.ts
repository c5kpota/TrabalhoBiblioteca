import { Router, Routes, RouterModule, NavigationStart, NavigationError } from '@angular/router';
import { NgModule } from '@angular/core';

import { CadastroAluno } from './pages/cadastro-aluno/cadastrarAluno';
import { CadastroCurso } from './pages/cadastro-curso/cadastrarCurso';
import {CadastroLivro} from './pages/cadastro-livro/cadastrarLivro';
import {CadastroEditora} from './pages/cadastro-editora/cadastrarEditora';
import { Login } from './pages/loginDeUsuario/loginUsuario';
export const appRoutes: Routes = [
    /**
     * Definição das rotas que o sistema vai ter
     * para cada rota precisa de um componente
     */
    {
        path: 'loginDeUsuario',
        component: Login
    },
     {
        path: 'cadastro-aluno',
        component: CadastroAluno
    },{
        path: 'cadastro-curso',
        component: CadastroCurso
    },{
        path: 'cadastro-livro',
        component: CadastroLivro
    },{
        path: 'cadastro-editora',
        component: CadastroEditora
    }

]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoute {

    constructor(router: Router) {
    }
}