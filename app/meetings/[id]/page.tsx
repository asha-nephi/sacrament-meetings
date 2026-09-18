import { notFound } from "next/navigation";
import MeetingDetail from "@/app/components/MeetingDetail";
import { getBaseUrl } from "@/lib/base-url";
import type { SacramentMeeting } from "@/lib/types";

export default async function MeetingPage({
  params,
}: PageProps<"/meetings/[id]">) {
  const { id } = await params;
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/meetings/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const meeting: SacramentMeeting = await res.json();

  return <MeetingDetail meeting={meeting} />;
}
