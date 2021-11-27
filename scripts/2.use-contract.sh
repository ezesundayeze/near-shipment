#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"

echo
echo
echo ---------------------------------------------------------
echo "Step 1: Add a contract"
echo
echo "(run this script again to see changes made by this file)"
echo ---------------------------------------------------------
echo

near call $CONTRACT create '{"shipment":"Eze", "currentLocation":"Lagos", "status":"pending"}' --accountId $CONTRACT

echo
echo
echo
echo ---------------------------------------------------------
echo "View all shipments"
echo ---------------------------------------------------------
echo
echo

near view $CONTRACT entry

echo
echo
echo ---------------------------------------------------------
echo "View one shipment"
echo ---------------------------------------------------------
echo

near view $CONTRACT get '{"id":818860518}' --accountId $CONTRACT


echo
echo
echo ---------------------------------------------------------
echo "Step 2: Call 'change' functions on the contract"
echo ---------------------------------------------------------
echo

# the following line fails with an error because we can't write to storage without signing the message
# --> FunctionCallError(HostError(ProhibitedInView { method_name: "storage_write" }))
# near view $CONTRACT write '{"key": "some-key", "value":"some value"}'
# near call $CONTRACT write '{"key": "some-key", "value":"some value"}' --accountId $CONTRACT

echo
echo "now run this script again to see changes made by this file"
exit 0
