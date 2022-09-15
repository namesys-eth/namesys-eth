function FindProxyForURL(url, host) {
    if (!shExpMatch(host, "*.eth")) return "DIRECT";
    return "PROXY localhost:3000; PROXY 192.168.1.106:3000";
}
