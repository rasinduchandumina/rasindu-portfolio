export type ShotSource =
  | "SIMULATOR"
  | "ARDUINO";

export type ShotZone =
  | "Bullseye"
  | "Inner Ring"
  | "Middle Ring"
  | "Outer Ring"
  | "Target"
  | "Miss";

export type ShotEvent = {
  id: string;
  sessionId: string;

  x: number;
  y: number;

  score: number;
  zone: ShotZone;
  distance: number;

  timestamp: number;

  source: ShotSource;
};
export type SessionStatus =
  | "READY"
  | "ACTIVE"
  | "COMPLETED";

export type ShootingSession = {
  id: string;
  startedAt: number | null;
  endedAt: number | null;
  status: SessionStatus;
};