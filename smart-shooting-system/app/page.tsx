"use client";

import { useEffect, useMemo, useState } from "react";
import type {
  ShotEvent,
  ShootingSession,
} from "@/lib/types";

import {
  createSession,
  completeSession,
} from "@/lib/session";

import Target from "@/components/Target";
import LastShot from "@/components/LastShot";
import SessionSummary from "@/components/SessionSummary";

type SimulationMode =
  | "RANDOM"
  | "BULLSEYE"
  | "GOOD"
  | "AVERAGE"
  | "MISS";

export default function Home() {
  const [session, setSession] =
    useState<ShootingSession | null>(null);

  const [shots, setShots] =
    useState<ShotEvent[]>([]);

  const [isFiring, setIsFiring] =
    useState(false);

  const [autoFire, setAutoFire] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  const isActive =
    session?.status === "ACTIVE";

  /*
   * =========================
   * STATISTICS
   * =========================
   */

  const totalShots = shots.length;

  const totalScore = useMemo(() => {
    return shots.reduce(
      (total, shot) => total + shot.score,
      0
    );
  }, [shots]);

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
      ? Math.max(
          ...shots.map((shot) => shot.score)
        )
      : 0;

  const lastShot =
    shots.length > 0
      ? shots[shots.length - 1]
      : null;

  /*
   * =========================
   * SESSION
   * =========================
   */

  function startNewSession() {
    if (
      session?.status === "ACTIVE" &&
      shots.length > 0
    ) {
      const confirmed = window.confirm(
        "Start a new session? Current shots will be cleared."
      );

      if (!confirmed) {
        return;
      }
    }

    setShots([]);
    setError(null);
    setAutoFire(false);

    const newSession =
      createSession();

    setSession(newSession);
  }

  function endCurrentSession() {
    if (!session) {
      return;
    }

    setAutoFire(false);

    const completed =
      completeSession(session);

    setSession(completed);
  }

  /*
   * =========================
   * FIRE SHOT
   * =========================
   */

  async function fireShot(
    mode: SimulationMode
  ) {
    if (
      isFiring ||
      !session ||
      session.status !== "ACTIVE"
    ) {
      return;
    }

    setIsFiring(true);
    setError(null);

    try {
      const response = await fetch(
        "/api/shots",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            sessionId: session.id,
            mode,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Failed to generate shot."
        );
      }

      if (data.shot) {
        setShots(
          (currentShots) => [
            ...currentShots,
            data.shot,
          ]
        );
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setIsFiring(false);
    }
  }

  /*
   * =========================
   * AUTO FIRE
   * =========================
   */

  useEffect(() => {
    if (
      !autoFire ||
      !session ||
      session.status !== "ACTIVE"
    ) {
      return;
    }

    const interval =
      setInterval(() => {
        void fireShot("RANDOM");
      }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [autoFire, session]);

  /*
   * =========================
   * UI
   * =========================
   */

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <header className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Smart Shooting Practice System
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-5xl">
            Shooting Practice Dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-zinc-400">
            Virtual Arduino simulation with
            real-time scoring, session
            management, and performance
            tracking.
          </p>
        </header>

        {/* SESSION BAR */}

        <section className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <div className="flex items-center gap-3">
                <span
                  className={`h-3 w-3 rounded-full ${
                    session?.status ===
                    "ACTIVE"
                      ? "bg-green-500"
                      : session?.status ===
                        "COMPLETED"
                      ? "bg-zinc-500"
                      : "bg-yellow-500"
                  }`}
                />

                <span className="font-semibold">
                  {session?.status ??
                    "READY"}
                </span>
              </div>

              {session && (
                <p className="mt-2 break-all font-mono text-xs text-zinc-500">
                  Session ID:{" "}
                  {session.id}
                </p>
              )}
            </div>

            {!session ||
            session.status ===
              "COMPLETED" ? (
              <button
                onClick={
                  startNewSession
                }
                className="rounded-lg bg-white px-5 py-3 font-semibold text-black hover:bg-zinc-200"
              >
                Start Session
              </button>
            ) : (
              <button
                onClick={
                  endCurrentSession
                }
                className="rounded-lg border border-red-800 px-5 py-3 font-semibold text-red-400 hover:bg-red-950"
              >
                End Session
              </button>
            )}
          </div>
        </section>

        {/* ERROR */}

        {error && (
          <div className="mb-6 rounded-xl border border-red-900 bg-red-950/30 p-4 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* MAIN */}

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* TARGET */}

          <Target shots={shots} />

          {/* CONTROLS */}

          <aside className="space-y-6">

            <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">

              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Virtual Arduino
              </p>

              <h2 className="mt-1 text-xl font-bold">
                Sensor Controls
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Simulate different sensor
                inputs without physical
                Arduino hardware.
              </p>

              <div className="mt-5 grid gap-3">

                <ShotButton
                  label="🎯 Bullseye"
                  disabled={
                    !isActive ||
                    isFiring
                  }
                  onClick={() =>
                    void fireShot(
                      "BULLSEYE"
                    )
                  }
                />

                <ShotButton
                  label="🟢 Good Shot"
                  disabled={
                    !isActive ||
                    isFiring
                  }
                  onClick={() =>
                    void fireShot(
                      "GOOD"
                    )
                  }
                />

                <ShotButton
                  label="🟡 Average Shot"
                  disabled={
                    !isActive ||
                    isFiring
                  }
                  onClick={() =>
                    void fireShot(
                      "AVERAGE"
                    )
                  }
                />

                <ShotButton
                  label="🔴 Miss"
                  disabled={
                    !isActive ||
                    isFiring
                  }
                  onClick={() =>
                    void fireShot(
                      "MISS"
                    )
                  }
                />

                <ShotButton
                  label="🎲 Random Shot"
                  disabled={
                    !isActive ||
                    isFiring
                  }
                  onClick={() =>
                    void fireShot(
                      "RANDOM"
                    )
                  }
                />

              </div>

              <div className="mt-5 border-t border-zinc-800 pt-5">

                <button
                  onClick={() =>
                    setAutoFire(
                      (current) =>
                        !current
                    )
                  }
                  disabled={!isActive}
                  className={`w-full rounded-lg px-4 py-3 font-semibold ${
                    autoFire
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-zinc-800 hover:bg-zinc-700"
                  } disabled:cursor-not-allowed disabled:opacity-30`}
                >
                  {autoFire
                    ? "Stop Automatic Fire"
                    : "Start Automatic Fire"}
                </button>

                {autoFire && (
                  <p className="mt-2 text-center text-xs text-zinc-500">
                    One random shot every
                    second.
                  </p>
                )}
              </div>
            </section>

            <LastShot shot={lastShot} />

          </aside>
        </div>

        {/* STATISTICS */}

        <section className="mt-8">

          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Performance
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            Live Statistics
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-5">

            <StatCard
              label="Shots"
              value={totalShots.toString()}
            />

            <StatCard
              label="Total Score"
              value={totalScore.toString()}
            />

            <StatCard
              label="Accuracy"
              value={`${accuracy.toFixed(
                1
              )}%`}
            />

            <StatCard
              label="Average"
              value={averageScore.toFixed(
                1
              )}
            />

            <StatCard
              label="Best Shot"
              value={bestScore.toString()}
            />

          </div>
        </section>

        {/* HISTORY */}

        <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">

          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Activity
              </p>

              <h2 className="mt-1 text-xl font-bold">
                Shot History
              </h2>
            </div>

            <span className="text-sm text-zinc-500">
              {shots.length} shots
            </span>
          </div>

          {shots.length === 0 ? (
            <div className="rounded-xl border border-dashed border-zinc-800 p-8 text-center">
              <p className="text-sm text-zinc-500">
                No shots recorded yet.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full text-left text-sm">

                <thead>
                  <tr className="border-b border-zinc-800 text-xs uppercase tracking-wider text-zinc-500">
                    <th className="px-3 py-3">
                      #
                    </th>

                    <th className="px-3 py-3">
                      Score
                    </th>

                    <th className="px-3 py-3">
                      Zone
                    </th>

                    <th className="px-3 py-3">
                      Position
                    </th>

                    <th className="px-3 py-3">
                      Source
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[...shots]
                    .reverse()
                    .map(
                      (
                        shot,
                        index
                      ) => (
                        <tr
                          key={shot.id}
                          className="border-b border-zinc-900"
                        >
                          <td className="px-3 py-3 text-zinc-500">
                            {shots.length -
                              index}
                          </td>

                          <td className="px-3 py-3 font-bold">
                            {shot.score}
                          </td>

                          <td className="px-3 py-3 text-zinc-400">
                            {shot.zone}
                          </td>

                          <td className="px-3 py-3 font-mono text-xs text-zinc-500">
                            {shot.x.toFixed(
                              1
                            )}
                            ,{" "}
                            {shot.y.toFixed(
                              1
                            )}
                          </td>

                          <td className="px-3 py-3 text-xs text-zinc-500">
                            {shot.source}
                          </td>
                        </tr>
                      )
                    )}
                </tbody>

              </table>
            </div>
          )}
        </section>

        {/* SUMMARY */}

        <div className="mt-8">
          <SessionSummary
            shots={shots}
            visible={
              session?.status ===
              "COMPLETED"
            }
            onNewSession={
              startNewSession
            }
          />
        </div>

        {/* FOOTER */}

        <footer className="mt-12 border-t border-zinc-900 py-6 text-center text-xs text-zinc-600">
          Smart Shooting Practice System
          · Virtual Arduino Demonstration
        </footer>

      </div>
    </main>
  );
}

/*
 * =========================
 * SHOT BUTTON
 * =========================
 */

function ShotButton({
  label,
  disabled,
  onClick,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded-lg border border-zinc-700 px-4 py-3 font-semibold transition hover:bg-zinc-900 disabled:cursor-not-allowed disabled:opacity-30"
    >
      {label}
    </button>
  );
}

/*
 * =========================
 * STAT CARD
 * =========================
 */

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <p className="text-xs uppercase tracking-wider text-zinc-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold md:text-3xl">
        {value}
      </p>
    </div>
  );
}