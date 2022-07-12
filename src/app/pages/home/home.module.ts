import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {SlideshowComponent} from './components/slideshow/slideshow.component';
import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';
import {CategoriesComponent} from './components/categories/categories.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [HomeComponent, SlideshowComponent, CategoriesComponent],
    imports: [CommonModule, HeaderModule, FooterModule, RouterModule],
})
export class HomeModule {}
