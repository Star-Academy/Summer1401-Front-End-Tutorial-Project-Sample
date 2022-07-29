export type FLipElementInfo = {element: HTMLElement; opacity: number; rect: DOMRect};
export type FlipState = {[key: string]: FLipElementInfo};
export type FlipEntry = [string, FLipElementInfo];
export type FlipInvert = {element: HTMLElement; keyframe: Keyframe; lastOpacity: number};
