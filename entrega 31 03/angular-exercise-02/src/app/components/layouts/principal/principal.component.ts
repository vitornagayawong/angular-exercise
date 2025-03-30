import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse'
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [MdbCollapseModule, RouterOutlet, MenuComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}
