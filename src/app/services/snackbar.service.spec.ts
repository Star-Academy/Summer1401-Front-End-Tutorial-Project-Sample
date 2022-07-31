import {TestBed} from '@angular/core/testing';
import {SnackbarComponent} from '../components/snackbar/snackbar.component';
import {SnackbarService} from './snackbar.service';

describe('SnackbarService', () => {
    let service: SnackbarService;
    let snackbarComponentSpy: jasmine.SpyObj<SnackbarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SnackbarService);
        snackbarComponentSpy = jasmine.createSpyObj<SnackbarComponent>('SnackbarComponent', ['show']);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('tests show', () => {
        service.initComponent(snackbarComponentSpy);
        service.show({message: 'This is a message.'});
        expect(snackbarComponentSpy.show.calls.count()).toBe(1);
    });
});
