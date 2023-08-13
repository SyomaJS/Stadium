export declare function encode(str: string): Promise<string>;
export declare function decode(str: string): Promise<string>;
export declare const dates: {
    compare: (a: Date | number, b: Date | number) => boolean;
};
