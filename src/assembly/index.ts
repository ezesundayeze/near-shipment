import { Shipment } from "./model";
import { MapEntry } from "near-sdk-as"

export function create(shipment: string, currentLocation: string, status: string): Shipment {

  return Shipment.insert(shipment, currentLocation, status);
}

export function entry(): MapEntry<u32, Shipment>[] {
  return Shipment.entry();
}

export function get(id: u32): Shipment {
  return Shipment.get(id);
}