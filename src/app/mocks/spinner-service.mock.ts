export class SpinnerServiceMock {
    public async wrapAsync<T>(callback: () => T): Promise<T> {
        return callback();
    }

    public show(): string {
        return 'id';
    }

    public hide(id: string): void {}

    public hideAll(): void {}
}
