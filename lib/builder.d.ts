import { AttrValue, getTheme, NullableAttrValue, NullableStyle, Style } from './theme';
export declare class Builder {
    [index: string]: any;
    static defineProp(name: string): void;
    static defineProps(propTypes: object, filter?: (p: string) => boolean): void;
    backgroundColor: NullableAttrValue;
    accent: NullableAttrValue;
    style: NullableStyle;
    getTheme: typeof getTheme;
    withAccent(v: string): this;
    withBackgroundColor(color: string): this;
    withStyle(v: Style): this;
    build(): void;
    toProps(): this & {};
    getThemeColor(): AttrValue;
    choseBackgroundColor(): void;
    mergeStyle(): void;
    mergeStyleWith(base: Style): void;
}
//# sourceMappingURL=builder.d.ts.map