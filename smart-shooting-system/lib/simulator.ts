import { ShotEvent } from "./types";
import { calculateScore } from "./scoring";

export type SimulationMode =
  | "RANDOM"
  | "BULLSEYE"
  | "GOOD"
  | "AVERAGE"
  | "MISS";

function getCoordinates(mode: SimulationMode) {
  switch (mode) {
    case "BULLSEYE":
      return {
        x: 50 + (Math.random() * 4 - 2),
        y: 50 + (Math.random() * 4 - 2),
      };

    case "GOOD":
      return {
        x: 50 + (Math.random() * 16 - 8),
        y: 50 + (Math.random() * 16 - 8),
      };

    case "AVERAGE":
      return {
        x: 50 + (Math.random() * 30 - 15),
        y: 50 + (Math.random() * 30 - 15),
      };

    case "MISS":
      return {
        x:
          Math.random() > 0.5
            ? Math.random() * 10
            : 90 + Math.random() * 10,
        y: Math.random() * 100,
      };

    case "RANDOM":
    default:
      return {
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
  }
}

export function generateSimulatedShot(
  sessionId: string,
  mode: SimulationMode = "RANDOM"
): ShotEvent {
  const { x, y } = getCoordinates(mode);

  const result = calculateScore(x, y);

        return {
        id: crypto.randomUUID(),

        sessionId,

        x,
        y,

        score: result.score,
        zone: result.zone,
        distance: result.distance,

        timestamp: Date.now(),

        source: "SIMULATOR",
        };
}