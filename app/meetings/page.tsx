import MeetingCard from "@/app/components/MeetingCard";
import { getBaseUrl } from "@/lib/base-url";
import type { SacramentMeeting } from "@/lib/types";

export default async function MeetingsPage() {
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/meetings`, { cache: "no-store" });
  const meetings: SacramentMeeting[] = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-semibold">Sacrament Meetings</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </div>
  );
}
