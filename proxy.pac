function FindProxyForURL(url, host) {
    var autoproxy = 'PROXY GOAGENT_LISTEN';

    if (shExpMatch(url, "*.local"))
        return "DIRECT";

    if (shExpMatch(url, "*://*.google.com/*") || shExpMatch(url, "*://*.google.com.hk/*" ||
        shExpMatch(url, "*://*.google-analytics.com/*") || shExpMatch(url, "*://*.googleapis.com/*") ||
        shExpMatch(url, "*://*.googlecode.com/*") || shExpMatch(url, "*://*.googlevideo.com/*") ||
        shExpMatch(url, "*://*.googleusercontent.com/*") || shExpMatch(url, "*://*.wikipedia.org/*"))
        return autoproxy;

    if (shExpMatch(url, "*://*.packagecontrol.io/*"))
        return autoproxy;

    if (shExpMatch(url, "*://*.bintray.com/bottles/*"))
        return autoproxy;

    return "DIRECT";
}
