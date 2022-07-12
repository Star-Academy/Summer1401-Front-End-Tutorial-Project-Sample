import {AfterViewInit, Component, OnDestroy} from '@angular/core';

interface Item {
    src: string;
}

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements AfterViewInit, OnDestroy {
    private readonly INTERVAL_DELAY: number = 3000;

    public items: Item[] = [
        {src: '/assets/images/slides/slide01.jpg'},
        {src: '/assets/images/slides/slide02.jpg'},
        {src: '/assets/images/slides/slide03.jpg'},
        {src: '/assets/images/slides/slide04.jpg'},
        {src: '/assets/images/slides/slide05.jpg'},
        {src: '/assets/images/slides/slide06.jpg'},
        {src: '/assets/images/slides/slide07.jpg'},
    ];

    public activeIndex: number = 0;

    private interval: number | null = null;

    public ngAfterViewInit(): void {
        this.resetInterval();
    }

    public ngOnDestroy(): void {
        if (this.interval !== null) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    public changeActiveIndex(index: number): void {
        if (index < 0) index = this.items.length - 1;
        else if (index >= this.items.length) index = 0;

        this.activeIndex = index;
        this.resetInterval();
    }

    private resetInterval(): void {
        if (this.interval !== null) clearInterval(this.interval);

        this.interval = setInterval(() => {
            this.changeActiveIndex(this.activeIndex + 1);
        }, this.INTERVAL_DELAY);
    }
}
