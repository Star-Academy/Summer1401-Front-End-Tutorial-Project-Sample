import {Component} from '@angular/core';
import {NgxPopperjsPlacements, NgxPopperjsTriggers} from 'ngx-popperjs';

import {Category} from './models/category';
import {MegaNavService} from './services/mega-nav.service';

@Component({
    selector: 'app-mega-nav',
    templateUrl: './mega-nav.component.html',
    styleUrls: ['./mega-nav.component.scss'],
})
export class MegaNavComponent {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;
    public NgxPopperjsTriggers = NgxPopperjsTriggers;

    public categories: Category[] = [];
    public activeCategory!: Category;

    public constructor(private service: MegaNavService) {
        this.categories = this.service.fetchCategories();
        this.activeCategory = this.categories[0];
    }
}
