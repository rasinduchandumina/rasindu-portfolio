import { ShotEvent } from "@/lib/types";

type SessionStatsProps = {
  shots: ShotEvent[];
};

export default function SessionStats({
  shots,
}: SessionStatsProps) {
  const totalShots = shots.length;

  const totalScore = shots.reduce(
    (total, shot) => total + shot.score,
    0
  );

  const averageScore =
    totalShots > 0
      ? totalScore / totalShots
      : 0;

  const accuracy =
    totalShots > 0
      ? (shots.filter((shot) => shot.score > 0).length /
          totalShots) *
        100
      : 0;

  const bestShot =
    totalShots > 0
      ? Math.max(...shots.map((shot) => shot.score))
      : 0;

  return (
    <div className="grid grid-cols-2 gap-3">
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
        value={`${accuracy.toFixed(1)}%`}
      />

      <StatCard
        label="Best Shot"
        value={bestShot.toString()}
      />

      <StatCard
        label="Average"
        value={averageScore.toFixed(1)}
      />
    </div>
  );
}

type StatCardProps = {
  label: string;
  value: string;
};

function StatCard({
  label,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
      <p className="text-xs uppercase tracking-wider text-zinc-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}