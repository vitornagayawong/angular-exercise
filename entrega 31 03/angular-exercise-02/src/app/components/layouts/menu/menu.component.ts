import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MdbCollapseModule, RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
