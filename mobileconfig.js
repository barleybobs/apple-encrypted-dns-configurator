
/**
 * Generates an Apple mobileconfig for a DNS server
 * @constructor
 * @param {string} name - The name of the DNS server (e.g. "Cloudflare").
 * @param {array} dns_addresses - The addresses of the DNS server (e.g. ["1.1.1.1"]).
 * @param {string} dns_encrypted_address The DNS servers address for DNS over HTTPS (e.g. "https://cloudflare-dns.com/dns-query")
 * @param {string} type Whether to generate for DoH or DoT (should be "doh" or "dot")
 */
function generate_mobileconfig(name, dns_addresses, dns_encrypted_address, type="doh") {
    console.log(dns_addresses)
    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>DNSSettings</key>
            <dict>
                <key>DNSProtocol</key>
                <string>${type === "doh" ? "HTTPS" : "TLS"}</string>${dns_addresses[0] !== "" ? `
                <key>ServerAddresses</key>
                <array>
${dns_addresses.map((address) => "                    <string>" + address + "</string>").join("\n")}
                </array>` : ""}
                <key>${type === "doh" ? "ServerURL" : "ServerName"}</key>
                <string>${dns_encrypted_address}</string>
            </dict>
            <key>PayloadDescription</key>
            <string>Configures device to use ${name} DNS over ${type === "doh" ? "HTTPS" : "TLS"}</string>
            <key>PayloadDisplayName</key>
            <string>${name} DNS over ${type === "doh" ? "HTTPS" : "TLS"}</string>
            <key>PayloadIdentifier</key>
            <string>com.apple.dnsSettings.managed.${crypto.randomUUID()}</string>
            <key>PayloadType</key>
            <string>com.apple.dnsSettings.managed</string>
            <key>PayloadUUID</key>
            <string>${crypto.randomUUID()}</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
            <key>ProhibitDisablement</key>
            <false/>
        </dict>
    </array>
    <key>PayloadDescription</key>
    <string>Adds the ${name} DNS over ${type === "doh" ? "HTTPS" : "TLS"} to MacOS and iOS based systems</string>
    <key>PayloadDisplayName</key>
    <string>${name} DNS over ${type === "doh" ? "HTTPS" : "TLS"}</string>
    <key>PayloadIdentifier</key>
    <string>com.barleybobs.apple-dns</string>
    <key>PayloadRemovalDisallowed</key>
    <false/>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>${crypto.randomUUID()}</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>`;
}