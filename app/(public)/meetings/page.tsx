import MeetingCard from "@/app/components/MeetingCard";
import { MeetingSearch } from "@/components/MeetingSearch";
import { Pagination } from "@/components/Pagination";
import { getMeetings, getMeetingsTotalPages } from "@/lib/meetings-db";

export default async function MeetingsPage(props: PageProps<"/meetings">) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query?.toString() ?? "";
  const currentPage = Number(searchParams?.page) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Sacrament Meetings</h1>
      <div className="mt-4">
        <MeetingSearch />
      </div>

      {meetings.length === 0 ? (
        <p className="mt-6 text-sm text-muted">No meetings found.</p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      )}

      <div className="mt-6">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
