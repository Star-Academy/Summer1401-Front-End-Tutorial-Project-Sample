import {Injectable} from '@angular/core';
import {API_USER_AUTH, API_USER_LOGIN} from '../utils/api.utils';
import {ApiService} from './api.service';
import {TokenObject} from '../models/token-object.model';
import {User} from '../models/user.model';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService implements CanActivate {
    public constructor(private router: Router, private apiService: ApiService) {}

    public async isLoggedIn(): Promise<boolean> {
        const token = localStorage.getItem('token') || '';
        return !!(await this.apiService.post<boolean>(API_USER_AUTH, {token}));
    }

    public async login(user: User): Promise<boolean> {
        const response = await this.apiService.post<TokenObject>(API_USER_LOGIN, user);
        if (!response) return false;

        localStorage.setItem('token', response.token);
        return true;
    }

    public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const isLoggedIn = await this.isLoggedIn();
        if (!isLoggedIn) {
            await this.router.navigateByUrl('/auth');
            return false;
        }

        return true;
    }
}
