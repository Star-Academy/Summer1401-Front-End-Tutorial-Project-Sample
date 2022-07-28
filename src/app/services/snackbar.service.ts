import {Injectable} from '@angular/core';
import {SnackbarComponent} from '../components/snackbar/snackbar.component';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    private snackbarComponent!: SnackbarComponent;

    public initComponent(snackbarComponent: SnackbarComponent): void {
        this.snackbarComponent = snackbarComponent;
    }

    public show(message: string, color?: string): void {
        this.snackbarComponent.show(message, color);
    }
}
