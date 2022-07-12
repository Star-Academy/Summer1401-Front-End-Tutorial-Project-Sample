import {Component, OnDestroy} from '@angular/core';
import {NgxPopperjsPlacements, NgxPopperjsTriggers} from 'ngx-popperjs';

import {Category} from './models/category';
import {MegaNavService} from './services/mega-nav.service';
import {Modifier} from '@popperjs/core';

@Component({
    selector: 'app-mega-nav',
    templateUrl: './mega-nav.component.html',
    styleUrls: ['./mega-nav.component.scss'],
})
export class MegaNavComponent implements OnDestroy {
    private readonly INDICATOR_FADE_OUT_DELAY: number = 100;

    public NgxPopperjsPlacements = NgxPopperjsPlacements;
    public NgxPopperjsTriggers = NgxPopperjsTriggers;

    public categories: Category[] = [];
    public activeCategory!: Category;

    public popperModifiers: Partial<Modifier<any, any>>[] = [
        {
            name: 'offset',
            options: {
                offset: [0, 0],
            },
        },
    ];

    public indicatorWidth: number = 0;
    public indicatorX: number = 0;

    private indicatorFadeOutTimeout: number | null = null;

    public constructor(private service: MegaNavService) {
        this.categories = this.service.fetchCategories();
        this.activeCategory = this.categories[0];
    }

    public ngOnDestroy(): void {
        this.removeTimeout();
    }

    public buttonMouseEnterHandler(e: MouseEvent): void {
        this.removeTimeout();

        const rect = (e.target as HTMLButtonElement).getBoundingClientRect();

        this.indicatorWidth = rect.width;
        this.indicatorX = rect.x;
    }

    public buttonMouseLeaveHandler(): void {
        this.indicatorFadeOutTimeout = setTimeout(() => {
            this.indicatorWidth = 0;
        }, this.INDICATOR_FADE_OUT_DELAY);
    }

    private removeTimeout(): void {
        if (this.indicatorFadeOutTimeout) {
            clearTimeout(this.indicatorFadeOutTimeout);
            this.indicatorFadeOutTimeout = null;
        }
    }
}
