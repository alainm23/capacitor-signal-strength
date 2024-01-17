import { WebPlugin } from '@capacitor/core';
export class SignalStrengthWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async test(options) {
        alert(options.msg + "Actualziado");
        return { value: options.msg };
    }
    async getdBm() {
        return "Web getdBm";
    }
    async getPercentage() {
        return "Web getPercentage";
    }
    async getLevel() {
        return "Web getLevel";
    }
}
//# sourceMappingURL=web.js.map