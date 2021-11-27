import { create } from "../index";
import { shipments } from "../model";

describe("Shipment methods", () => {
  it("creates a shipment", () => {
    const shipment = create("Dozens of clothes", "New York", "arrived");
    expect(shipments.getSome(shipment.id)).toStrictEqual(shipment);
  });
});