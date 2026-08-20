import type { ShootingSession } from "./types";

export function createSession(): ShootingSession {
  return {
    id: crypto.randomUUID(),
    startedAt: Date.now(),
    endedAt: null,
    status: "ACTIVE",
  };
}

export function completeSession(
  session: ShootingSession
): ShootingSession {
  return {
    ...session,
    endedAt: Date.now(),
    status: "COMPLETED",
  };
}