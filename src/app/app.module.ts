import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AuthModule} from './pages/auth/auth.module';
import {HomeModule} from './pages/home/home.module';
import {NotFoundModule} from './pages/not-found/not-found.module';
import {ProfileModule} from './pages/profile/profile.module';
import {SnackbarModule} from './components/snackbar/snackbar.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, AuthModule, HomeModule, NotFoundModule, ProfileModule, SnackbarModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
