import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordInputComponent} from './password-input.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [PasswordInputComponent],
    imports: [CommonModule, FormsModule],
    exports: [PasswordInputComponent],
})
export class PasswordInputModule {}
