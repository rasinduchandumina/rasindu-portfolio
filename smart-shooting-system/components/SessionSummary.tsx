"use client";

import type { ShotEvent } from "@/lib/types";

type SessionSummaryProps = {
  shots: ShotEvent[];
  visible: boolean;
  onNewSession?: () => void;
};

export default function SessionSummary({
  shots,
  visible,
  onNewSession,
}: SessionSummaryProps) {
  if (!visible) {
    return null;
  }

  const totalShots = shots.length;

  const totalScore = shots.reduce(
    (total, shot) => total + shot.score,
    0
  );

  const successfulShots = shots.filter(
    (shot) => shot.score > 0
  ).length;

  const accuracy =
    totalShots > 0
      ? (successfulShots / totalShots) * 100
      : 0;

  const averageScore =
    totalShots > 0
      ? totalScore / totalShots
      : 0;

  const bestScore =
    totalShots > 0
      ? Math.max(...shots.map((shot) => shot.score))
      : 0;

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          Session Completed
        </p>

        <h2 className="text-2xl font-bold">
          Performance Summary
        </h2>

        <p className="text-sm text-zinc-500">
          Final results from your shooting practice
          session.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
        <Stat
          label="Shots"
          value={totalShots.toString()}
        />

        <Stat
          label="Score"
          value={totalScore.toString()}
        />

        <Stat
          label="Accuracy"
          value={`${accuracy.toFixed(1)}%`}
        />

        <Stat
          label="Average"
          value={averageScore.toFixed(1)}
        />

        <Stat
          label="Best Shot"
          value={bestScore.toString()}
        />
      </div>

      {onNewSession && (
        <button
          onClick={onNewSession}
          className="mt-6 rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
        >
          Start New Session
        </button>
      )}
    </section>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 p-4">
      <p className="text-xs uppercase tracking-wider text-zinc-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold">
        {value}
      </p>
    </div>
  );
}