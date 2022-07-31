import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {LocalStorageMock} from '../mocks/local-storage.mock';
import {RouterTestingModule} from '@angular/router/testing';
import {FetchMock, VALID_TOKEN, VALID_USER_LOGIN_DATA} from '../mocks/fetch.mock';
import {SnackbarService} from './snackbar.service';
import {SpinnerService} from './spinner.service';
import {SnackbarServiceMock} from '../mocks/snackbar-service.mock';
import {SpinnerServiceMock} from '../mocks/spinner-service.mock';

describe('AuthService', () => {
    let service: AuthService;
    let localStorageMock: LocalStorageMock;
    let fetchMock: FetchMock;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                {provide: SnackbarService, useValue: new SnackbarServiceMock()},
                {provide: SpinnerService, useValue: new SpinnerServiceMock()},
            ],
        });

        localStorageMock = new LocalStorageMock();
        spyOn(localStorage, 'getItem').and.callFake(localStorageMock.getItem.bind(localStorageMock));
        spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem.bind(localStorageMock));
        spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem.bind(localStorageMock));
        spyOn(localStorage, 'clear').and.callFake(localStorageMock.clear.bind(localStorageMock));

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));

        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
        testCache('', null, null);
    });

    it('tests token - empty', () => {
        expect(service.token).toEqual('');
    });

    it('tests token - value', () => {
        localStorageMock.setItem('token', 'value');
        expect(service.token).toEqual('value');
    });

    it('tests isLoggedIn - false - empty token', async () => {
        const response = await service.isLoggedIn();
        expect(response).toBeFalse();
        testCache('', false, null);
    });

    it('tests isLoggedIn - false - invalid token', async () => {
        localStorageMock.setItem('token', 'value');
        const response = await service.isLoggedIn();
        expect(response).toBeFalse();
        testCache('value', false, null);
    });

    it('tests isLoggedIn - true', async () => {
        localStorageMock.setItem('token', VALID_TOKEN);
        const response = await service.isLoggedIn();
        expect(response).toBeTrue();
        testCache(VALID_TOKEN, true, 23);
    });

    it('tests login - false', async () => {
        const response = await service.login({username: '', password: ''});
        expect(response).toBeFalse();
        testCache('', false, null);
    });

    it('tests login - true', async () => {
        const response = await service.login(VALID_USER_LOGIN_DATA);
        expect(response).toBeTrue();
        testCache(VALID_TOKEN, true, 23);
    });

    // [SECTION] Utility Functions

    const testCache = (token: string, isLoggedIn: boolean | null, userId: number | null): void => {
        expect(service.token).toEqual(token);
        expect(service.cachedIsLoggedIn).toEqual(isLoggedIn);
        expect(service.cachedUserId).toEqual(userId);
    };
});
