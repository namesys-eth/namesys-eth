# namesys-eth 

- [**index.html**](./index.html) : home
- [**_redirects**](./_redirects) : ipfs redirect config file [(docs)](https://docs.ipfs.tech/how-to/websites-on-ipfs/redirects-and-custom-404s/#how-to-set-up)
- [**404.html**](./404.html) : 404 page
- [**ipns.html**](./ipns.html) : clientside redirect for `/ipns/<hash>`
- [**ipfs.html**](./ipfs.html) : clientside redirect for `/ipfs/<hash>`
- [**ipld.html**](./ipld.html) : clientside redirect for `/ipld/<hash>`
- [**.well-known/**](.well-known)
    - [**eth/**](.well-known/eth)
        - [**namesys/**](.well-known/eth/namesys)
            - [**addr-60.json**](.well-known/eth/namesys/addr-60.json) : ETH `addr` for `namesys.eth`
            - [**avatar.json**](.well-known/eth/namesys/avatar.json) : ENS `avatar` for `namesys.eth`

            - [**app/**](.well-known/eth/namesys)
                - [**addr-60.json**](.well-known/eth/namesys/app/addr-60.json) : ETH `addr` for `app.namesys.eth`
                - [**avatar.json**](.well-known/eth/namesys/avatar.json) : ENS `avatar` for `app.namesys.eth`
    - [**lnurlp**](.well-known/lnurlp)
        - [**pay**](.well-known/lnurlp/pay) : BTC lightning url `pay@namesys.eth.limo`
    - [**nostr.json**](.well-known/nostr.json) : Nostr NIP05 records for dev@namesys.eth
- [**2.pac**](./2.pac) : Proxy Auto Config file for tests
- [**.nojekyll**](./.nojekyll) : github file to stop ignoring `.folder`
