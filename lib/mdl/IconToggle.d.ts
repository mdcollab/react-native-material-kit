import { Component } from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
import { CheckedListener } from '../types';
import { RippleProps } from './Ripple';
export declare type IconToggleProps = {
    enabled?: boolean;
    checked?: boolean;
    onCheckedChange?: CheckedListener;
} & RippleProps & TouchableWithoutFeedbackProps;
interface IconToggleState {
    checked: boolean;
}
export default class IconToggle extends Component<IconToggleProps, IconToggleState> {
    static defaultProps: IconToggleProps;
    private theme;
    constructor(props: IconToggleProps);
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: IconToggleProps): void;
    render(): JSX.Element;
    private renderChildren;
    private onTouch;
    private confirmToggle;
}
export {};
//# sourceMappingURL=IconToggle.d.ts.map