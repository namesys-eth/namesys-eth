# Index

- [**`index.html`**](./index.html) : Home
- [**`_redirects`**](./_redirects) : IPFS Redirect Config file [(docs)](https://docs.ipfs.tech/how-to/websites-on-ipfs/redirects-and-custom-404s/#how-to-set-up)
- [**`404.html`**](./404.html) : 404 page
- [**`IPNS.html`**](./ipns.html) : Clientside Redirect for `/ipns/<hash>`
- [**`IPFS.html`**](./ipfs.html) : Clientside Redirect for `/ipfs/<hash>`
- [**`IPLD.html`**](./ipld.html) : Clientside Redirect for `/ipld/<hash>`
- [**`.well-known/eth/`**](.well-known)
    - [**`dev3/`**](.well-known/eth/dev3)
        - [**`addr/60.json`**](.well-known/eth/namesys/addr/60.json) : ETH `addr` for `dev3.eth`
        - [**`text/avatar.json`**](.well-known/eth/namesys/text/avatar.json) : ENS `avatar` for `dev3.eth`
        - [**`namesys-eth/`**](.well-known/eth/dev3/namesys-eth)
            - [**`addr/60.json`**](.well-known/eth/namesys/addr/60.json) : ETH `addr` for `namesys-eth.dev3.eth`
            - [**`text/avatar.json`**](.well-known/eth/namesys/text/avatar.json) : ENS `avatar` for `namesys-eth.dev3.eth`

    - [**`domain/`**](.well-known/eth/namesys)
        - [**`addr/60.json`**](.well-known/eth/namesys/app/addr/60.json) : ETH `addr` for `domain.eth`
        - [**`text/avatar.json`**](.well-known/eth/namesys/app/text/avatar.json) : ENS `avatar` for `domain.eth`
    - [**`lnurlp`**](.well-known/lnurlp)
        - [**`pay`**](.well-known/lnurlp/pay) : BTC Lightning URL `pay@namesys.eth.limo`
    - [**`nostr.json`**](.well-known/nostr.json) : Nostr NIP-05 Records for `dev@namesys.eth`
- [**`2.pac`**](./2.pac) : Proxy Auto Config (PAC) file
- [**`.nojekyll`**](./.nojekyll) : Github file to stop ignoring `.folder`
