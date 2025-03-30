import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { AlunoService } from '../../../services/aluno.service';
import { Aluno } from '../../../models/aluno';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aluno-details',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './aluno-details.component.html',
  styleUrl: './aluno-details.component.scss'
})
export class AlunoDetailsComponent {
  alunoService = inject(AlunoService);
  router = inject(ActivatedRoute);
  router2 = inject(Router);
  listaAlunos: Aluno[] = [];
  
  @Input("aluno") aluno: Aluno = new Aluno();
  @Output("retorno") retorno = new EventEmitter();

  constructor(){
    let id = this.router.snapshot.params['id'];
    if(id > 0) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.alunoService.findById(id).subscribe({
      next: (response: any) => {
        this.aluno = response
      },
      error: (erro: any) => {
        alert(erro)
      }
    })
  }

  findAll() {
    this.alunoService.findAll().subscribe({
      next: (response: any) => {
        this.listaAlunos = response
      },
      error: (erro: any) => {
        alert(erro)
      }
    })
  }

  save() {
    if(this.aluno.id > 0) {
      this.alunoService.update(this.aluno, this.aluno.id).subscribe({
        next: (response: any) => {
          alert(response)
          this.router2.navigate(['aluno']);
          this.retorno.emit(this.aluno)
        },
        error: (erro: any) => {
          alert(erro)
        }
      })
      this.router2.navigate(['aluno']);
    } else {
      this.alunoService.save(this.aluno).subscribe({
        next: (response: any) => {
          alert(response)
          this.router2.navigate(['aluno']);
          this.retorno.emit(this.aluno)
        },
        error: (erro: any) => {
          alert(erro)
        }
      })
    }
  }

  retornoDetalhe(aluno: Aluno) {
      if(aluno.id > 0) {
        this.findAll();
        this.modalRef.close();
      }
    }
  
  
}
