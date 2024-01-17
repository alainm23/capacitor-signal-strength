package com.github.alainm23.capacitorsignalstrength;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "SignalStrength")
public class SignalStrengthPlugin extends Plugin {

    private SignalStrength implementation = new SignalStrength();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void getdBm(PluginCall call) {
        call.resolve("Android getdBm");
    }

    @PluginMethod
    public void getPercentage(PluginCall call) {
        call.resolve("Android getPercentage");
    }

    @PluginMethod
    public void getLevel(PluginCall call) {
        call.resolve("Android getLevel");
    }
}
