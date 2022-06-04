import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {AparatComponent} from './icons/aparat/aparat.component';
import {InstagramComponent} from './icons/instagram/instagram.component';
import {LinkedinComponent} from './icons/linkedin/linkedin.component';
import {TelegramComponent} from './icons/telegram/telegram.component';

@NgModule({
    declarations: [HomeComponent, AparatComponent, InstagramComponent, LinkedinComponent, TelegramComponent],
    imports: [CommonModule],
})
export class HomeModule {}
