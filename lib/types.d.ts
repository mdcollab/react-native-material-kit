import { ReactChild } from 'react';
export declare type NullableString = string | null | undefined;
export declare type NullableReactChild = ReactChild | null | undefined;
export interface CheckedEvent {
    checked: boolean;
}
export declare type CheckedListener = (event: CheckedEvent) => void;
export declare type Prediction<T> = (obj?: T) => boolean;
export interface Dimension {
    width: number;
    height: number;
}
//# sourceMappingURL=types.d.ts.map