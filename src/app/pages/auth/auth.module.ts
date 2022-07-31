import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {PasswordInputModule} from '../../components/password-input/password-input.module';

@NgModule({
    declarations: [AuthComponent, LoginFormComponent, RegisterFormComponent],
    imports: [CommonModule, FormsModule, RouterModule, PasswordInputModule],
})
export class AuthModule {}
