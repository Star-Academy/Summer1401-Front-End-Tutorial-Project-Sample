import {Component} from '@angular/core';
import {User} from 'src/app/models/user.model';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    public user: User = {
        username: '',
        email: '',
        password: '',
    };

    public isInLoginView: boolean = true;

    public constructor(private router: Router, private authService: AuthService) {}

    public async formSubmitHandler(): Promise<void> {
        const succeeded = await this.authService.login(this.user);
        if (succeeded) await this.router.navigateByUrl('/');
    }
}
