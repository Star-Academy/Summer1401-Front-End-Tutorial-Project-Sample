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
    public cachedIsLoggedIn: boolean | null = null;

    public constructor(private router: Router, private apiService: ApiService) {
        this.auth().then();
    }

    public get token(): string {
        return localStorage.getItem('token') || '';
    }

    public async isLoggedIn(): Promise<boolean> {
        if (this.cachedIsLoggedIn !== null) return this.cachedIsLoggedIn;
        return await this.auth();
    }

    public async login(user: User): Promise<boolean> {
        const response = await this.apiService.post<TokenObject>({url: API_USER_LOGIN, body: user});
        if (!response) return false;

        this.cachedIsLoggedIn = true;
        localStorage.setItem('token', response.token);
        return true;
    }

    public async logout(): Promise<void> {
        this.cachedIsLoggedIn = false;
        localStorage.removeItem('token');
        await this.router.navigateByUrl('/');
    }

    private async auth(): Promise<boolean> {
        this.cachedIsLoggedIn = !!(await this.apiService.post<boolean>({
            url: API_USER_AUTH,
            body: {token: this.token},
            showError: false,
        }));

        return this.cachedIsLoggedIn;
    }
}
