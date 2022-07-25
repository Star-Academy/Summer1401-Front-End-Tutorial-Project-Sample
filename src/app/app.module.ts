import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './pages/home/home.module';
import {NotFoundModule} from './pages/not-found/not-found.module';
import {ProfileModule} from './pages/profile/profile.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HomeModule, ProfileModule, NotFoundModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
