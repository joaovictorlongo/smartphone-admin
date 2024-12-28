import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const users = [
  {
    email: 'admin@email.com',
    password: '123456'
  }
]

interface LoginInput {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticatedUser: boolean;

  constructor(private router: Router) {
    this.authenticatedUser = !!localStorage.getItem('user');
  }

  login(input: LoginInput): void {
    const user = users.find(user => user.email === input.email && user.password === input.password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.authenticatedUser = true;
      this.router.navigate(['/home']);
    }
  }

  isUserAuthenticated(): boolean {
    return this.authenticatedUser;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.authenticatedUser = false;
    this.router.navigate(['/auth']);
  }
}
