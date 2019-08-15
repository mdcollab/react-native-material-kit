import { Component } from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
import { CheckedListener } from '../types';
export declare type SwitchProps = {
    checked?: boolean;
    onCheckedChange?: CheckedListener;
    onColor?: string;
    offColor?: string;
    trackSize?: number;
    trackLength?: number;
    thumbRadius?: number;
    thumbOnColor?: string;
    thumbOffColor?: string;
    thumbAniDuration?: number;
    rippleColor?: string;
    rippleAniDuration?: number;
} & TouchableWithoutFeedbackProps;
interface SwitchState {
    checked: boolean;
    thumbFrame: {
        padding: number;
        r: number;
        rippleRadii: number;
        x: number;
    };
    trackLength: number;
    trackMargin: number;
    trackRadii: number;
    trackSize: number;
}
export default class Switch extends Component<SwitchProps, SwitchState> {
    static defaultProps: SwitchProps;
    private theme;
    private thumbRef;
    private animatedThumbLeft;
    constructor(props: SwitchProps);
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: SwitchProps): void;
    render(): JSX.Element;
    private readonly thumb;
    private getBgColor;
    private onPress;
    private onPressIn;
    private onPressOut;
    private layoutThumb;
    private initLayout;
    private translateThumb;
    private computeThumbX;
    private startToggle;
    private confirmToggle;
    private endToggle;
}
export {};
//# sourceMappingURL=Switch.d.ts.map