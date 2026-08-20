"use client";

import type { ShotEvent } from "@/lib/types";

type TargetProps = {
  shots: ShotEvent[];
};

export default function Target({
  shots,
}: TargetProps) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Virtual Target
          </p>

          <h2 className="mt-1 text-xl font-bold">
            Live Shooting Target
          </h2>
        </div>

        <div className="rounded-lg border border-zinc-800 px-3 py-2 text-xs text-zinc-500">
          {shots.length} shots
        </div>
      </div>

      <div className="mx-auto aspect-square w-full max-w-[600px] rounded-full border-2 border-zinc-700 bg-zinc-900 p-[8%]">
        <div className="relative h-full w-full rounded-full border-2 border-zinc-600">
          {/* Outer ring */}
          <div className="absolute inset-[12%] rounded-full border-2 border-zinc-600" />

          {/* Middle ring */}
          <div className="absolute inset-[24%] rounded-full border-2 border-zinc-500" />

          {/* Inner ring */}
          <div className="absolute inset-[36%] rounded-full border-2 border-zinc-400" />

          {/* Bullseye */}
          <div className="absolute left-1/2 top-1/2 h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white" />

          {/* Shot markers */}
          {shots.map((shot) => (
            <div
              key={shot.id}
              className="absolute z-20 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-red-600 text-[9px] font-bold shadow-lg"
              style={{
                left: `${shot.x}%`,
                top: `${shot.y}%`,
              }}
              title={`${shot.zone} - ${shot.score} points`}
            >
              {shot.score}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-center text-xs text-zinc-500">
        Shot markers show the simulated sensor
        position and score.
      </p>
    </section>
  );
}