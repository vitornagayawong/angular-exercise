import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/layouts/principal/principal.component';
import { AlunoListComponent } from './components/aluno/aluno-list/aluno-list.component';
import { ProfessorListComponent } from './components/professor/professor-list/professor-list.component';
import { TurmaListComponent } from './components/turma/turma-list/turma-list.component';
import { CursoListComponent } from './components/curso/curso-list/curso-list.component';
import { AlunoFormComponent } from './components/aluno/aluno-form/aluno-form.component';
import { AlunoDetailsComponent } from './components/aluno/aluno-details/aluno-details.component';

export const routes: Routes = [
    {path: '', redirectTo: 'principal', pathMatch: 'full'},
    {path: 'principal', component: PrincipalComponent, children: [
        {path: 'aluno', component: AlunoListComponent},
        {path: 'aluno-form', component: AlunoFormComponent},
        {path: 'aluno-details/:id', component: AlunoDetailsComponent},
        {path: 'professor', component: ProfessorListComponent},
        {path: 'turma', component: TurmaListComponent},
        {path: 'curso', component: CursoListComponent},
    ]},

];
