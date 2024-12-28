import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NzIconModule, NzLayoutModule, NzMenuModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isCollapsed = false;

  welcomeTitle = 'Início';
  formTitle = 'Cadastros';
  dashboardTitle = 'Indicadores';
  productsTitle = 'Produtos';

  constructor(private authService: AuthService) {}

  logout() {
    return this.authService.logout();
  }
}
