import {Injectable} from '@angular/core';
import {SnackbarComponent} from '../components/snackbar/snackbar.component';
import {SnackbarOptions} from '../models/snackbar-options.model';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    private snackbarComponent!: SnackbarComponent;

    public initComponent(snackbarComponent: SnackbarComponent): void {
        this.snackbarComponent = snackbarComponent;
    }

    public show(options: SnackbarOptions): void {
        this.snackbarComponent.show(options);
    }
}
