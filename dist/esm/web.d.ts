import { WebPlugin } from '@capacitor/core';
import type { SignalStrengthPlugin } from './definitions';
export declare class SignalStrengthWeb extends WebPlugin implements SignalStrengthPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    test(options: {
        msg: string;
    }): Promise<{
        value: string;
    }>;
    getdBm(): Promise<string>;
    getPercentage(): Promise<string>;
    getLevel(): Promise<string>;
}
