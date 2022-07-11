import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FooterComponent} from './footer.component';

import {AparatComponent} from './icons/aparat/aparat.component';
import {InstagramComponent} from './icons/instagram/instagram.component';
import {LinkedinComponent} from './icons/linkedin/linkedin.component';
import {TelegramComponent} from './icons/telegram/telegram.component';

@NgModule({
    declarations: [FooterComponent, AparatComponent, InstagramComponent, LinkedinComponent, TelegramComponent],
    exports: [FooterComponent],
    imports: [CommonModule],
})
export class FooterModule {}
