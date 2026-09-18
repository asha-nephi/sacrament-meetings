import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";
import { toISODateString } from "@/lib/format";

export default function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  const [meeting] = getMeetings(toISODateString(sunday));

  redirect(meeting ? `/meetings/${meeting.id}` : "/meetings");
}
