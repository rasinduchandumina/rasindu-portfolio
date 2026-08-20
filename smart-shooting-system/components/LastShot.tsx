"use client";

import type { ShotEvent } from "@/lib/types";

type LastShotProps = {
  shot: ShotEvent | null;
};

export default function LastShot({
  shot,
}: LastShotProps) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <p className="text-xs uppercase tracking-wider text-zinc-500">
        Last Shot
      </p>

      {shot ? (
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-4xl font-bold">
              {shot.score}
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              {shot.zone}
            </p>
          </div>

          <div className="text-right">
            <p className="font-mono text-xs text-zinc-500">
              X: {shot.x.toFixed(1)}
            </p>

            <p className="font-mono text-xs text-zinc-500">
              Y: {shot.y.toFixed(1)}
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              {shot.source}
            </p>
          </div>
        </div>
      ) : (
        <p className="mt-4 text-sm text-zinc-500">
          No shots fired yet.
        </p>
      )}
    </section>
  );
}