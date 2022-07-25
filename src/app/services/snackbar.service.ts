import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    public show(message: string): void {
        console.log('snackbar', message);
    }
}
