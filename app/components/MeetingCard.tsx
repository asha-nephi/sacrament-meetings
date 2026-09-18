import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";
import { MEETING_TYPE_LABELS, formatDate } from "@/lib/format";

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  const speakerCount = meeting.speakers.filter((s) => s.type === "speaker").length;

  return (
    <Link
      href={`/meetings/${meeting.id}`}
      className="block rounded-card border border-border bg-surface p-5 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base font-semibold">{formatDate(meeting.date)}</h3>
        <span className="whitespace-nowrap rounded-full bg-border px-2.5 py-1 text-xs font-medium text-foreground">
          {MEETING_TYPE_LABELS[meeting.meetingType] ?? meeting.meetingType}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted">Presiding: {meeting.presiding}</p>
      {speakerCount > 0 && (
        <p className="text-sm text-muted">
          {speakerCount} speaker{speakerCount === 1 ? "" : "s"}
        </p>
      )}
    </Link>
  );
}
