import { WebPlugin } from '@capacitor/core';

import type { SignalStrengthPlugin } from './definitions';

export class SignalStrengthWeb
  extends WebPlugin
  implements SignalStrengthPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async test(options: { msg: string }): Promise<{ value: string }> {
    alert(options.msg + "Actualziado");
    return { value: options.msg };
  }

  async getdBm(): Promise<string> {
    return "Web getdBm";
  }

  async getPercentage(): Promise<string> {
    return "Web getPercentage";
  }

  async getLevel(): Promise<string> {
    return "Web getLevel";
  }
}
