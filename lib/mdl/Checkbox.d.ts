import { Component } from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
import { TickProps } from '../internal/Tick';
import { CheckedListener } from '../types';
import { RippleProps } from './Ripple';
/**
 * ## <section id='props'>Props</section>
 * @public
 */
export declare type CheckboxProps = {
    borderOnColor?: string;
    borderOffColor?: string;
    checked?: boolean;
    onCheckedChange?: CheckedListener;
    extraRippleRadius?: number;
    editable?: boolean;
} & TickProps & RippleProps & TouchableWithoutFeedbackProps;
interface CheckboxState {
    checked: boolean;
    width: number;
    height: number;
    rippleRadii: number;
}
/**
 * The `Checkbox` component.
 */
export default class Checkbox extends Component<CheckboxProps, CheckboxState> {
    static defaultProps: CheckboxProps;
    private theme;
    private animatedTickAlpha;
    constructor(props: CheckboxProps);
    UNSAFE_componentWillMount(): void;
    /**
     * TODO using controlled components.
     * @see https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html?#preferred-solutions
     */
    UNSAFE_componentWillReceiveProps(nextProps: CheckboxProps): void;
    render(): JSX.Element;
    private initView;
    private onLayout;
    private onTouch;
    private aniToggle;
    private confirmToggle;
}
export {};
//# sourceMappingURL=Checkbox.d.ts.map