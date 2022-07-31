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
        testVariation();
    });

    const variations: Array<'vertical' | 'horizontal'> = ['vertical', 'horizontal'];
    for (const variation of variations) {
        it(`should render line - ${variation}`, () => {
            testVariation(variation);
        });
    }

    // [SECTION] Utility Functions

    const testVariation = (variation?: 'vertical' | 'horizontal'): void => {
        if (!!variation) {
            component.variation = variation;
            fixture.detectChanges();
        }

        const line = host.querySelector('i');

        expect(line).toBeTruthy();
        expect(line?.className).toEqual(variation || 'vertical');
    };
});
