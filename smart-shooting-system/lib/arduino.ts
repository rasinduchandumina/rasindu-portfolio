import type { ShotEvent } from "./types";

export type ArduinoShotInput = {
  x: number;
  y: number;
};

export function convertArduinoInput(
  input: ArduinoShotInput,
  sessionId: string
): Omit<
  ShotEvent,
  "score" | "zone" | "distance"
> {
  return {
    id: crypto.randomUUID(),

    sessionId,

    x: input.x,
    y: input.y,

    timestamp: Date.now(),

    source: "ARDUINO",
  };
}