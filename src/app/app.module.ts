import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './pages/home/home.module';
import {GameModule} from './pages/game/game.module';
import {NotFoundModule} from './pages/not-found/not-found.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, GameModule, HomeModule, NotFoundModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
