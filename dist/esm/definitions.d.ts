export interface SignalStrengthPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    getdBm(): Promise<string>;
    getPercentage(): Promise<string>;
    getLevel(): Promise<string>;
}
