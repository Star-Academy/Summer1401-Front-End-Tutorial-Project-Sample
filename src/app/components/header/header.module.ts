import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {DividerModule} from '../divider/divider.module';
import {ProfileButtonComponent} from './components/profile-button/profile-button.component';
import {FormsModule} from '@angular/forms';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {MegaNavComponent} from './components/mega-nav/mega-nav.component';

@NgModule({
    declarations: [HeaderComponent, SearchBoxComponent, ProfileButtonComponent, MegaNavComponent],
    exports: [HeaderComponent],
    imports: [CommonModule, RouterModule, DividerModule, FormsModule, NgxPopperjsModule],
})
export class HeaderModule {}
