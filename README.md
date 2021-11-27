# Near shipment

1. Clone repo with `git clone`
2. Install dependencies `yarn`

   --- Follow 3. to 6. or check scripts in `./scripts` ---

3. Build Web Assembly file `yarn build:release`
4. Deploy to NEAR testnet `near dev-deploy ./build/release/singleton.wasm` and copy temporary account id
5. Set CONTRACT env variable with that account id `export CONTRACT=<dev-123-456>`
6. Call method from deployed smart contract `near call $CONTRACT generateLuckyQuote --accountId $CONTRACT`

