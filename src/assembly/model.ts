import { PersistentUnorderedMap, math, MapEntry } from "near-sdk-as";

export const shipments = new PersistentUnorderedMap<u32, Shipment>("shipments");

@nearBindgen
export class Shipment {
  id: u32;
  shipment: string;
  status: string;
  currentLocation: string;

  constructor(shipment: string, currentLocation: string, status: string = "pending") {
    this.id = math.hash32<string>(shipment);
    this.shipment = shipment;
    this.currentLocation = currentLocation; 
    this.status = status;
  }

  static create(shipment: string, currentLocation: string, status: string): Shipment {
    const cargo = new Shipment(shipment, currentLocation, status);
    shipments.set(cargo.id, cargo);
    return cargo;
  }

  static get(id: u32): Shipment {
    const cargo = shipments.get(id)!;
    return cargo;
  }

  static entries(): MapEntry<u32, Shipment>[] {
    const cargos = shipments.entries()!;
    return cargos;
  }
}