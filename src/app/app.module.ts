import { BrowserModule } from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { CadastroAluno } from './pages/cadastro-aluno/cadastrarAluno';
import { CadastroCurso } from './pages/cadastro-curso/cadastrarCurso';
import { CadastroEditora } from './pages/cadastro-editora/cadastrarEditora';
import { CadastroLivro } from './pages/cadastro-livro/cadastrarLivro';
import { Login } from './pages/loginDeUsuario/loginUsuario';
import { Menu } from './componentes/menu/menu';
import { AppRoute } from './app.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    Menu,
    CadastroAluno,
    CadastroCurso,
    CadastroEditora,
    CadastroLivro,
    Login
  ],
  imports: [
    BrowserModule, 
     MatButtonModule, MatCheckboxModule, 
     AppRoute, FormsModule, 
     MatDatepickerModule,  MatNativeDateModule,
     ReactiveFormsModule, MaterialModule,
      CommonModule, BrowserAnimationsModule, FlexLayoutModule
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
