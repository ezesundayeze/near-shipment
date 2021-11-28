# Near shipment

1. Clone repo with `git clone`
2. Install dependencies `yarn`
3. install `near-cli` globably

```bash
npm install -g near-cli
```

--- check scripts in `./scripts` ---

## How it works

- This smart contract can be used by a delivery company to track deliveries from the warehouse to the item's destination
- at every point the item moves, the delivery agent will need to update the current location, basically by creating a shipment with the same information and only changing the `status` and `currentLoction`
- in the end the status will be changed to delivered and the current location will be set to the destination.




