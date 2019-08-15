import { Component } from 'react';
import { ViewProps } from 'react-native';
export interface TickProps extends ViewProps {
    fillColor?: string;
    inset?: number;
}
export default class Tick extends Component<TickProps> {
    render: () => JSX.Element;
}
export declare const AnimatedTick: any;
//# sourceMappingURL=Tick.d.ts.map