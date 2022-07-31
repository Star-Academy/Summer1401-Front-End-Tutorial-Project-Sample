import {ChangeDetectorRef, Component} from '@angular/core';
import {SnackbarService} from '../../services/snackbar.service';
import {SnackbarTheme} from '../../enums/snackbar-theme.enum';
import {SnackbarOptions} from '../../models/snackbar-options.model';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
    readonly FADE_OUT_DELAY: number = 5_000;

    public message: string | null = null;
    public theme: SnackbarTheme = SnackbarTheme.DEFAULT;

    private timeout!: number;

    public constructor(private changeDetectorRef: ChangeDetectorRef, private snackbarService: SnackbarService) {
        this.snackbarService.initComponent(this);
    }

    public show(options: SnackbarOptions): void {
        clearTimeout(this.timeout);

        this.message = options.message;
        this.theme = options.theme || SnackbarTheme.DEFAULT;

        this.changeDetectorRef.detectChanges();

        this.timeout = setTimeout(() => {
            this.message = null;
        }, this.FADE_OUT_DELAY);
    }

    public closeButtonClickHandler(): void {
        clearTimeout(this.timeout);
        this.message = null;
    }
}
