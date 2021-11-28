import { Shipment } from "./model";
import { MapEntry } from "near-sdk-as"

export function create(shipment: string, currentLocation: string, status: string): Shipment {

  return Shipment.create(shipment, currentLocation, status);
}

export function entries(): MapEntry<u32, Shipment>[] {
  return Shipment.entries();
}

export function get(id: u32): Shipment {
  return Shipment.get(id);
}