import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {SlideshowComponent} from './components/slideshow/slideshow.component';
import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';

@NgModule({
    declarations: [HomeComponent, SlideshowComponent],
    imports: [CommonModule, HeaderModule, FooterModule],
})
export class HomeModule {}
