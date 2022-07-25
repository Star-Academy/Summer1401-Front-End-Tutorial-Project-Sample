import {Injectable} from '@angular/core';
import {API_USER_AUTH} from '../utils/api.utils';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public constructor(private apiService: ApiService) {}

    public async isLoggedIn(): Promise<boolean> {
        return !!(await this.apiService.post<boolean>(API_USER_AUTH));
    }
}
