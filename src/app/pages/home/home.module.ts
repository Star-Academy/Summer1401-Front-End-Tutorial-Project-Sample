import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {SlideshowComponent} from './components/slideshow/slideshow.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [HomeComponent, SlideshowComponent, CategoriesComponent],
    imports: [CommonModule, RouterModule],
})
export class HomeModule {}
