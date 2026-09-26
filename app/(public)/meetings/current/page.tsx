import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";
import { toISODateString } from "@/lib/format";

export default async function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  const [meeting] = await getMeetings("", 1, toISODateString(sunday));

  redirect(meeting ? `/meetings/${meeting.id}` : "/meetings");
}
