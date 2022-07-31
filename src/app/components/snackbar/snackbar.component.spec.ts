import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {SnackbarComponent} from './snackbar.component';
import {SnackbarTheme} from '../../enums/snackbar-theme.enum';
import {SnackbarOptions} from '../../models/snackbar-options.model';

describe('SnackbarComponent', () => {
    let fixture: ComponentFixture<SnackbarComponent>;
    let component: SnackbarComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SnackbarComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SnackbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render snackbar - default inputs', () => {
        testDom();
    });

    it('should render snackbar - message', () => {
        const options: SnackbarOptions = {message: 'This is a message.'};
        show(options);
        testDom(options);
    });

    it('should render snackbar - message and theme', () => {
        const options: SnackbarOptions = {message: 'This is a message.', theme: SnackbarTheme.WARNING};
        show(options);
        testDom(options);
    });

    it('tests closeButtonClickHandler', () => {
        const options: SnackbarOptions = {message: 'This is a message.'};
        show(options);
        closeButtonClickHandler();
        testDom();
    });

    it('tests timeout', fakeAsync(() => {
        const options: SnackbarOptions = {message: 'This is a message.'};
        show(options);
        tick(component.FADE_OUT_DELAY);
        testDom();
    }));

    // [SECTION] Utility Functions

    const show = (options: SnackbarOptions): void => {
        component.show(options);
        fixture.detectChanges();
    };

    const closeButtonClickHandler = (): void => {
        component.closeButtonClickHandler();
        fixture.detectChanges();
    };

    const testDom = (options?: SnackbarOptions): void => {
        fixture.detectChanges();

        testSnackbar(options);
        testSnackbarMessage(options);
        testSnackbarButton();
        testSnackbarButtonIcon();
    };

    const testSnackbar = (options?: SnackbarOptions): void => {
        const snackbar = host.querySelector('.snackbar');

        expect(snackbar).toBeTruthy();
        expect(snackbar?.classList).toContain(options?.theme || SnackbarTheme.DEFAULT);

        if (!!options?.message) expect(snackbar?.classList).toContain('show');
        else expect(snackbar?.classList).not.toContain('show');
    };

    const testSnackbarMessage = (options?: SnackbarOptions): void => {
        const message = host.querySelector('.snackbar .message');

        expect(message).toBeTruthy();
        if (!!options?.message) expect(message?.textContent).toContain(options.message);
    };

    const testSnackbarButton = (): void => {
        const button = host.querySelector('.snackbar button');
        expect(button).toBeTruthy();
    };

    const testSnackbarButtonIcon = (): void => {
        const icon = host.querySelector('.snackbar button i');

        expect(icon).toBeTruthy();
        expect(icon?.className).toEqual('far fa-times');
    };
});
