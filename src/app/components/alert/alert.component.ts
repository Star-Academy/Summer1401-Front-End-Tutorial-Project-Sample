import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    @Input() public iconClassNames: string = 'far fa-info';
    @Input() public title: string = 'Title';
    @Input() public description: string = 'This is a description.';
    @Input() public showFooter: boolean = true;

    @ViewChild('titleRef') public titleRef!: ElementRef<HTMLHeadingElement>;

    public constructor() {
        console.log('constructor');
    }

    public ngOnInit(): void {
        console.log('ngOnInit');
        console.log('titleRef', this.titleRef);
    }

    public ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
        console.log('titleRef', this.titleRef);

        // this.titleRef.nativeElement.textContent = this.title;
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges');

        console.log(changes);
    }

    public ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }
}
