import {Injectable} from '@angular/core';
import {API_USER_AUTH, API_USER_LOGIN} from '../utils/api.utils';
import {ApiService} from './api.service';
import {TokenObject} from '../models/api/token-object.model';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public constructor(private router: Router, private apiService: ApiService) {}

    public async isLoggedIn(): Promise<boolean> {
        const token = localStorage.getItem('token') || '';
        return !!(await this.apiService.post<boolean>({url: API_USER_AUTH, body: {token}, showError: false}));
    }

    public async login(user: User): Promise<boolean> {
        const response = await this.apiService.post<TokenObject>({url: API_USER_LOGIN, body: user});
        if (!response) return false;

        localStorage.setItem('token', response.token);
        return true;
    }
}
