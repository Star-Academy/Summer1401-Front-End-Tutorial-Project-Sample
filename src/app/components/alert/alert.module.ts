import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from './alert.component';
import {HomeModule} from '../../pages/home/home.module';

@NgModule({
    declarations: [AlertComponent],
    imports: [CommonModule, HomeModule],
    exports: [AlertComponent],
})
export class AlertModule {}
