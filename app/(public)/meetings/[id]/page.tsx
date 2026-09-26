import { notFound } from "next/navigation";
import MeetingDetail from "@/app/components/MeetingDetail";
import { getMeetingById } from "@/lib/meetings-db";

export default async function MeetingPage({
  params,
}: PageProps<"/meetings/[id]">) {
  const { id } = await params;

  if (!/^-?\d+$/.test(id)) {
    notFound();
  }

  const meeting = await getMeetingById(Number(id));

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}
