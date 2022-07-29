import {ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import {FLipElementInfo, FlipEntry, FlipInvert, FlipState} from './models/flip-state.model';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    private readonly ANIMATION_OPTIONS: KeyframeAnimationOptions = {
        duration: 400,
        easing: 'cubic-bezier(0.7, -0.3, 0.3, 1.3)',
    };

    @ViewChild('boxRef') private boxRef!: ElementRef<HTMLDivElement>;

    public isChangingView: boolean = false;
    public isInLoginView: boolean = false;

    public constructor(private changeDetectorRef: ChangeDetectorRef) {}

    public async toggleView(): Promise<void> {
        if (!this.boxRef) return;

        if (this.isInLoginView) this.isChangingView = true;
        else await this.flip(() => (this.isChangingView = true));

        await this.flip(() => (this.isInLoginView = !this.isInLoginView));

        if (this.isInLoginView) this.isChangingView = false;
        else await this.flip(() => (this.isChangingView = false));
    }

    private async flip(changeCallback: Function): Promise<void> {
        const first = this.generateState();

        changeCallback();
        this.changeDetectorRef.detectChanges();

        const last = this.generateState();
        const inverts = this.generateInverts(first, last);
        await this.play(inverts);
    }

    private generateState(): FlipState {
        const elements = Array.from(this.boxRef.nativeElement.querySelectorAll('*'));
        const animatableElements = elements.filter((element) => element.hasAttribute('data-flip-id'));

        const entries: FlipEntry[] = animatableElements.map((element) => [
            element.getAttribute('data-flip-id')!,
            {
                element: element as HTMLElement,
                opacity: Number.parseFloat(getComputedStyle(element).opacity),
                rect: element.getBoundingClientRect(),
            },
        ]);

        return Object.fromEntries(entries);
    }

    private generateInverts(first: FlipState, last: FlipState): FlipInvert[] {
        const inverts: FlipInvert[] = [];

        Object.entries(last).forEach(([id, lastInfo]) => {
            if (first.hasOwnProperty(id)) {
                inverts.push({
                    element: lastInfo.element,
                    keyframe: this.generateKeyframe(first[id], lastInfo),
                    lastOpacity: lastInfo.opacity,
                });

                return;
            }
        });

        return inverts;
    }

    private async play(inverts: FlipInvert[]): Promise<void> {
        const promises: Promise<void>[] = [];

        inverts.forEach((invert) => {
            const keyframes: Keyframe[] = [
                invert.keyframe,
                {
                    opacity: invert.lastOpacity,
                    transform: 'translate(0) scale(1)',
                },
            ];

            const animation = invert.element.animate(keyframes, this.ANIMATION_OPTIONS);

            const promise = new Promise<void>((resolve) => {
                animation.addEventListener('finish', () => resolve());
            });

            promises.push(promise);
        });

        await Promise.allSettled(promises);
    }

    private generateKeyframe(firstInfo: FLipElementInfo, lastInfo: FLipElementInfo): Keyframe {
        const deltaX = firstInfo.rect.x - lastInfo.rect.x;
        const deltaY = firstInfo.rect.y - lastInfo.rect.y;
        const scaleX = firstInfo.rect.width / lastInfo.rect.width;
        const scaleY = firstInfo.rect.height / lastInfo.rect.height;

        return {
            opacity: firstInfo.opacity,
            transform: `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`,
        };
    }
}
