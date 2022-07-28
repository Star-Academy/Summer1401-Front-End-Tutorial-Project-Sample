import {Injectable} from '@angular/core';
import {SnackbarComponent} from '../components/snackbar/snackbar.component';
import {SnackbarTheme} from '../enums/snackbar-theme.enum';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    private snackbarComponent!: SnackbarComponent;

    public initComponent(snackbarComponent: SnackbarComponent): void {
        this.snackbarComponent = snackbarComponent;
    }

    public show(message: string, theme?: SnackbarTheme): void {
        this.snackbarComponent.show(message, theme);
    }
}
