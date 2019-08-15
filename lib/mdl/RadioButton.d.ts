import { Component } from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
import { CheckedListener } from '../types';
import Group from './RadioButtonGroup';
import { RippleProps } from './Ripple';
export declare type RadioButtonProps = {
    borderOnColor?: string;
    borderOffColor?: string;
    fillColor?: string;
    checked?: boolean;
    group?: Group;
    onCheckedChange?: CheckedListener;
    extraRippleRadius?: number;
} & RippleProps & TouchableWithoutFeedbackProps;
interface RadioButtonState {
    checked: boolean;
    height: number;
    width: number;
}
export default class RadioButton extends Component<RadioButtonProps, RadioButtonState> {
    static defaultProps: RadioButtonProps;
    private theme;
    private animatedSize;
    private animatedRadius;
    private group?;
    constructor(props: RadioButtonProps);
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: RadioButtonProps): void;
    componentWillUnmount(): void;
    confirmToggle(): void;
    confirmUncheck(): void;
    render(): JSX.Element;
    private initView;
    private emitCheckedChange;
    private aniChecked;
    private onLayout;
    private onTouch;
}
export {};
//# sourceMappingURL=RadioButton.d.ts.map