import {ChangeDetectorRef, Component} from '@angular/core';
import {SnackbarService} from '../../services/snackbar.service';
import {SnackbarTheme} from '../../enums/snackbar-theme.enum';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
    private readonly FADE_OUT_DELAY: number = 5_000;

    public message: string | null = null;
    public theme: SnackbarTheme = SnackbarTheme.DEFAULT;

    private timeout: number | null = null;

    public constructor(private changeDetectorRef: ChangeDetectorRef, private snackbarService: SnackbarService) {
        this.snackbarService.initComponent(this);
    }

    public show(message: string, theme?: SnackbarTheme): void {
        this.clearTimeoutIfExists();

        this.message = message;
        this.theme = theme || SnackbarTheme.DEFAULT;

        this.changeDetectorRef.detectChanges();

        this.timeout = setTimeout(() => {
            this.message = null;
            this.timeout = null;
        }, this.FADE_OUT_DELAY);
    }

    public closeButtonClickHandler(): void {
        this.clearTimeoutIfExists();
        this.message = null;
    }

    private clearTimeoutIfExists(): void {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }
}
