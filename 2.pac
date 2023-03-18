function FindProxyForURL(url, host) {
    if (!shExpMatch(host, "*.eth")) return "DIRECT";
    let ipns = host.split(".").join("-") +".ipns.dweb.link:443";
    return "HTTPS "+ipns+"; HTTPS "+host+".limo:443";
}
