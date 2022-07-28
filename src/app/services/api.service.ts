import {Injectable} from '@angular/core';
import {POST_REQUEST_INIT} from '../utils/api.utils';
import {SnackbarService} from './snackbar.service';
import {SnackbarTheme} from '../enums/snackbar-theme.enum';
import {ResponseError} from '../models/api/response-error.model';
import {PostRequestOptions} from '../models/api/post-request-options.model';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public constructor(private snackbarService: SnackbarService) {}

    public async post<T>(options: PostRequestOptions): Promise<T | null> {
        const {url, showError = true} = options;

        const init = ApiService.generatePostRequestInit(options);
        const response = await fetch(url, init);
        const data = await response.json();

        if (response.status === 200) return data as T;

        if (showError)
            this.snackbarService.show({message: (data as ResponseError).message, theme: SnackbarTheme.DANGER});

        return null;
    }

    private static generatePostRequestInit(options: PostRequestOptions): RequestInit {
        return {
            ...POST_REQUEST_INIT,
            body: JSON.stringify(options.body),
            ...(options.init || {}),
        };
    }
}
