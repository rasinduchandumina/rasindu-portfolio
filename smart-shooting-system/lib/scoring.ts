import { ShotZone } from "./types";

export type ScoreResult = {
  score: number;
  zone: ShotZone;
  distance: number;
};

const TARGET_CENTER = 50;

export function calculateScore(
  x: number,
  y: number
): ScoreResult {
  const dx = x - TARGET_CENTER;
  const dy = y - TARGET_CENTER;

  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance <= 5) {
    return {
      score: 10,
      zone: "Bullseye",
      distance,
    };
  }

  if (distance <= 12) {
    return {
      score: 8,
      zone: "Inner Ring",
      distance,
    };
  }

  if (distance <= 20) {
    return {
      score: 5,
      zone: "Middle Ring",
      distance,
    };
  }

  if (distance <= 32) {
    return {
      score: 3,
      zone: "Outer Ring",
      distance,
    };
  }

  if (distance <= 45) {
    return {
      score: 1,
      zone: "Target",
      distance,
    };
  }

  return {
    score: 0,
    zone: "Miss",
    distance,
  };
}