
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Aluno } from '../../../models/aluno';
import { Component, inject } from '@angular/core';
import { AlunoService } from '../../../services/aluno.service';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [MdbFormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss'
})
export class AlunoFormComponent {
  

  listaAlunos!: Aluno[];

  alunoService = inject(AlunoService);

  cadastrarAluno() {
    
  }
}
