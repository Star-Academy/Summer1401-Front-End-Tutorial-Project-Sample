import {ChangeDetectorRef, Component} from '@angular/core';
import {SnackbarService} from '../../services/snackbar.service';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
    private readonly FADE_OUT_DELAY: number = 3_000;

    public message: string | null = null;
    public color: string | null = null;

    private timeout: number | null = null;

    public constructor(private changeDetectorRef: ChangeDetectorRef, private snackbarService: SnackbarService) {
        this.snackbarService.initComponent(this);
    }

    public show(message: string, color?: string): void {
        this.clearTimeoutIfExists();

        this.message = message;
        this.color = color || null;

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
