import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MegaNavComponent} from './mega-nav.component';

describe('MegaNavComponent', () => {
    let component: MegaNavComponent;
    let fixture: ComponentFixture<MegaNavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MegaNavComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MegaNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
