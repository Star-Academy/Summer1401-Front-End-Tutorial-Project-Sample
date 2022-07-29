import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './pages/auth/auth.module';
import {HomeModule} from './pages/home/home.module';
import {NotFoundModule} from './pages/not-found/not-found.module';
import {ProfileModule} from './pages/profile/profile.module';
import {SnackbarModule} from './components/snackbar/snackbar.module';
import {HeaderModule} from './components/header/header.module';
import {FooterModule} from './components/footer/footer.module';
import {DividerModule} from './components/divider/divider.module';
import {SpinnerModule} from './components/spinner/spinner.module';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [
                BrowserModule,
                AppRoutingModule,
                AuthModule,
                HomeModule,
                NotFoundModule,
                ProfileModule,
                SnackbarModule,
                HeaderModule,
                FooterModule,
                DividerModule,
                SpinnerModule,
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
