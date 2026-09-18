import type { SacramentMeeting } from "@/lib/types";
import { MEETING_TYPE_LABELS, formatDate } from "@/lib/format";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-4 first:border-t-0 first:pt-0">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
        {title}
      </h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <article className="rounded-card border border-border bg-surface p-6">
      <header>
        <span className="rounded-full bg-border px-2.5 py-1 text-xs font-medium">
          {MEETING_TYPE_LABELS[meeting.meetingType] ?? meeting.meetingType}
        </span>
        <h1 className="mt-3 text-2xl font-semibold">{formatDate(meeting.date)}</h1>
        <p className="mt-1 text-sm text-muted">
          Presiding: {meeting.presiding} &middot; Conducting: {meeting.conducting}
        </p>
        {meeting.stakeBusiness && (
          <p className="mt-1 text-sm text-accent">Includes stake business</p>
        )}
      </header>

      {meeting.announcements && meeting.announcements.length > 0 && (
        <Section title="Announcements">
          <ul className="list-inside list-disc space-y-1 text-sm">
            {meeting.announcements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      )}

      <Section title="Opening">
        <p className="text-sm">
          Hymn {meeting.openingHymn.number}: {meeting.openingHymn.title}
        </p>
        <p className="text-sm text-muted">Prayer: {meeting.openingPrayer}</p>
      </Section>

      {meeting.wardBusiness.length > 0 && (
        <Section title="Ward Business">
          <ul className="list-inside list-disc space-y-1 text-sm">
            {meeting.wardBusiness.map((item) => (
              <li key={item.description}>{item.description}</li>
            ))}
          </ul>
        </Section>
      )}

      <Section title="Sacrament Hymn">
        <p className="text-sm">
          Hymn {meeting.sacramentHymn.number}: {meeting.sacramentHymn.title}
        </p>
      </Section>

      {meeting.speakers.length > 0 && (
        <Section title="Program">
          <ol className="space-y-2 text-sm">
            {meeting.speakers.map((item, index) => (
              <li key={`${item.name}-${index}`}>
                {item.type === "musical-number" ? (
                  <span>Musical number: {item.name}</span>
                ) : (
                  <span>
                    {item.name}
                    {item.topic && <span className="text-muted"> &mdash; {item.topic}</span>}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Section>
      )}

      <Section title="Closing">
        <p className="text-sm">
          Hymn {meeting.closingHymn.number}: {meeting.closingHymn.title}
        </p>
        <p className="text-sm text-muted">Prayer: {meeting.closingPrayer}</p>
      </Section>
    </article>
  );
}
