import { Component } from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';
export declare type ThumbProps = {
    checked: boolean;
    onColor?: string;
    offColor?: string;
    rippleColor?: string;
    rippleAniDuration: number;
    rippleRadius: number;
    thumbStyle?: StyleProp<ViewStyle>;
} & ViewProps;
interface ThumbState {
    checked: boolean;
}
export declare class Thumb extends Component<ThumbProps, ThumbState> {
    static defaultProps: ThumbProps;
    private animatedRippleScale;
    private animatedRippleAlpha;
    private rippleAni?;
    private pendingRippleAni?;
    constructor(props: ThumbProps);
    /**
     * TODO using controlled components.
     * @see https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html?#preferred-solutions
     */
    UNSAFE_componentWillReceiveProps(nextProps: ThumbProps): void;
    startToggle(): void;
    endToggle(): void;
    confirmToggle(fromState: boolean): void;
    showRipple(): void;
    hideRipple(): void;
    render(): JSX.Element;
}
declare const AnimatedThumb: any;
export default AnimatedThumb;
//# sourceMappingURL=SwitchThumb.d.ts.map