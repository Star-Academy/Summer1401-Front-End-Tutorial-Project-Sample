import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-password-input',
    templateUrl: './password-input.component.html',
    styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent {
    @Input() public isNew: boolean = true;
    @Input() public value: string = '';

    @Output() public valueChange = new EventEmitter<string>();

    public isPasswordVisible: boolean = false;
}
