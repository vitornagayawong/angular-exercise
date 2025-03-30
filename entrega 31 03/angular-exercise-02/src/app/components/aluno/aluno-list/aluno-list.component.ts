import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { AlunoService } from '../../../services/aluno.service';
import { Aluno } from '../../../models/aluno';
import { Router } from '@angular/router';
import { AlunoDetailsComponent } from '../aluno-details/aluno-details.component';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [AlunoDetailsComponent],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss',
})
export class AlunoListComponent {
  listaAlunos: Aluno[] = [];

  alunoService = inject(AlunoService);

  router = inject(Router);

  @ViewChild('modalAlunosDetalhe') modalAlunosDetalhe!: TemplateRef<any>; //referência ao template da modal
  modalService = inject(MdbModalService); //para abrir a modal
  modalRef!: MdbModalRef<any>; //vc conseguir fechar a modal depois

  constructor() {
    this.findAll();
  }

  save(aluno: Aluno) {
    this.alunoService.save(aluno).subscribe({
      next: (msg: any) => {
        this.listaAlunos.push(aluno);
        alert(msg);
      },
      error: (erro: any) => {
        alert(erro);
      },
    });
  }

  findAll() {
    this.alunoService.findAll().subscribe({
      next: (listaRetornada: any) => {
        this.listaAlunos = listaRetornada;
        console.log(this.listaAlunos);
      },
      error: (erro: any) => {
        alert(erro);
      },
    });
  }

  findById(aluno: Aluno) {
    this.alunoService.findById(aluno.id).subscribe({
      next: (aluno: any) => {
        console.log(this.listaAlunos);
      },
      error: (erro: any) => {
        alert(erro);
      },
    });
  }

  retornoDetalhe(aluno: Aluno) {
    this.findAll();
    this.modalRef.close();
  }

  deletar(aluno: Aluno) {
    let indice = this.listaAlunos.findIndex((a) => a.id == aluno.id);
    this.listaAlunos.splice(indice, 1);
  }

  editar() {
    this.router.navigate(['principal/aluno-form']);
  }
}
