import { NextResponse } from "next/server";
import {
  generateSimulatedShot,
  type SimulationMode,
} from "@/lib/simulator";

const VALID_MODES: SimulationMode[] = [
  "RANDOM",
  "BULLSEYE",
  "GOOD",
  "AVERAGE",
  "MISS",
];

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();

    const sessionId = body?.sessionId;
    const mode = body?.mode;

    if (
      typeof sessionId !== "string" ||
      sessionId.trim() === ""
    ) {
      return NextResponse.json(
        {
          error:
            "sessionId is required.",
        },
        { status: 400 }
      );
    }

    if (
      !VALID_MODES.includes(
        mode as SimulationMode
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid simulation mode.",
        },
        { status: 400 }
      );
    }

    const shot = generateSimulatedShot(
      sessionId,
      mode as SimulationMode
    );

    return NextResponse.json(
      {
        success: true,
        shot,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Shot API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to process shot.",
      },
      { status: 500 }
    );
  }
}