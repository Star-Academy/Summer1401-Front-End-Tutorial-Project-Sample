import {Injectable} from '@angular/core';
import {API_USER_AUTH, API_USER_LOGIN, API_USER_ONE} from '../utils/api.utils';
import {ApiService} from './api.service';
import {TokenObject} from '../models/api/token-object.model';
import {User} from '../models/user.model';
import {Router} from '@angular/router';
import {UserLoginData} from '../models/api/user-login-data.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public cachedIsLoggedIn: boolean | null = null;
    public cachedUserId: number | null = null;
    public cachedUser: User | null = null;

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

    public async login(user: UserLoginData): Promise<boolean> {
        const response = await this.apiService.postRequest<TokenObject>({url: API_USER_LOGIN, body: user});
        if (!response) return false;

        this.cachedIsLoggedIn = true;
        this.cachedUserId = response.id ?? null;
        localStorage.setItem('token', response.token);

        if (this.cachedUserId) await this.fetchLoggedInUserInfo();

        return true;
    }

    public async fetchLoggedInUserInfo(): Promise<void> {
        const response = await this.apiService.getRequest<{user: User}>({url: `${API_USER_ONE}/${this.cachedUserId}`});
        this.cachedUser = response?.user || null;
    }

    public async logout(): Promise<void> {
        this.cachedIsLoggedIn = false;
        localStorage.removeItem('token');
        await this.router.navigateByUrl('/');
    }

    private async auth(): Promise<boolean> {
        const response = await this.apiService.postRequest<TokenObject>({
            url: API_USER_AUTH,
            body: {token: this.token},
            showError: false,
        });

        this.cachedIsLoggedIn = !!response;
        this.cachedUserId = response?.id ?? null;

        if (this.cachedUserId) await this.fetchLoggedInUserInfo();

        return this.cachedIsLoggedIn;
    }
}
