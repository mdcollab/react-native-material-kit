import React from 'react';
import { ViewProps } from 'react-native';
export interface TouchEvent {
    type: 'TOUCH_DOWN' | 'TOUCH_UP' | 'TOUCH_MOVE' | 'TOUCH_CANCEL';
    x: number;
    y: number;
}
export declare type MKTouchableProps = {
    onTouch?: (event: TouchEvent) => void;
} & ViewProps;
declare const MKTouchable: React.ComponentType<{
    onTouch?: ((event: TouchEvent) => void) | undefined;
} & ViewProps & React.ClassAttributes<React.Component<{}, {}, any>>>;
export default MKTouchable;
//# sourceMappingURL=MKTouchable.d.ts.map