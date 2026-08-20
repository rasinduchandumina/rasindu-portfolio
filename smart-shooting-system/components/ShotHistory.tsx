import { ShotEvent } from "@/lib/types";

type ShotHistoryProps = {
  shots: ShotEvent[];
};

export default function ShotHistory({
  shots,
}: ShotHistoryProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <div className="border-b border-zinc-800 px-5 py-4">
        <h2 className="font-semibold">
          Shot History
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Recent shooting events from the current session.
        </p>
      </div>

      {shots.length === 0 ? (
        <div className="px-5 py-10 text-center text-sm text-zinc-500">
          No shots recorded yet.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-zinc-800 text-xs uppercase tracking-wider text-zinc-500">
              <tr>
                <th className="px-5 py-3">#</th>
                <th className="px-5 py-3">Position</th>
                <th className="px-5 py-3">Score</th>
                <th className="px-5 py-3">Zone</th>
                <th className="px-5 py-3">Source</th>
              </tr>
            </thead>

            <tbody>
              {shots
                .slice()
                .reverse()
                .map((shot, index) => {
                  

                  return (
                    <tr
                      key={shot.id}
                      className="border-b border-zinc-900 last:border-0"
                    >
                      <td className="px-5 py-4 text-zinc-500">
                        {shots.length - index}
                      </td>

                      <td className="px-5 py-4 font-mono text-xs">
                        {shot.x.toFixed(1)},{" "}
                        {shot.y.toFixed(1)}
                      </td>

                      <td className="px-5 py-4 font-semibold">
                        {shot.score}
                      </td>

                      <td className="px-5 py-4">
                        {shot.zone}
                      </td>

                      <td className="px-5 py-4 text-xs text-zinc-500">
                        {shot.source}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}