import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DividerComponent} from './divider.component';

describe('DividerComponent', () => {
    let fixture: ComponentFixture<DividerComponent>;
    let component: DividerComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DividerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DividerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render line - default inputs', () => {
        testVariation('vertical');
    });

    it('should render line - vertical', () => {
        testVariation('vertical');
    });

    it('should render line - horizontal', () => {
        testVariation('horizontal');
    });

    // [SECTION] Utility Functions

    const testVariation = (variation: 'vertical' | 'horizontal' | undefined): void => {
        if (!!variation) component.variation = variation;
        fixture.detectChanges();

        const line = host.querySelector('i');

        expect(line).toBeTruthy();
        expect(line?.className).toEqual(variation);
    };
});
