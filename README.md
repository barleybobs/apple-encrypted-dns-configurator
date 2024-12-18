# encrypted-dns-configurator
Configuration profile generator for iOS and macOS to utilise DNS over HTTPS and DNS over TLS.

## Usage
To install or create a profile visit [https://barleybobs.github.io/encrypted-dns-configurator/](https://barleybobs.github.io/encrypted-dns-configurator/). 

It is best visited in Safari as then when the `Download` button is clicked it will download the profile automatically.

If using another browser then it will download the .mobileconfig file. This may then be missing the `.mobileconfig` extension in files. If so rename it so that it has the extension and then open it to install.

### Profile Templates
There are a number of premade templates for various providers. You can select from these or create your own custom profile.

### Service Name
This is the name of the DNS provider you are using (e.g. Cloudflare).

### Addresses
This is a newline seperated list of addresses used by the DNS server. These can be IPv4 or IPv6 and can include both.

### Template
If creating a DoH profile then this should be the URL. Whereas if creating a DoT profile then this should be a domain.

### Type
This can either be DoH (DNS over HTTPS) or DoT (DNS over TLS).

### Sharing Profiles
If you wish to share a profile you have made with someone else then use the `Copy Profile Link` button. This will copy a link which when visited will load the profile.
