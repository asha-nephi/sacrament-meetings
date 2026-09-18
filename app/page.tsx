import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-10">
      <Image
        src="/chapel-hero.svg"
        alt="Illustration of a meetinghouse chapel with a steeple at sunrise"
        width={1200}
        height={600}
        priority
        className="w-full rounded-card border border-border"
      />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Welcome to Sacrament Meeting
        </h1>
        <p className="max-w-2xl text-muted">
          Find the program for this Sunday or browse past and upcoming
          sacrament meetings, including hymns, speakers, and ward business.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/meetings/current"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            This Sunday&apos;s Meeting
          </Link>
          <Link
            href="/meetings"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-border"
          >
            View All Meetings
          </Link>
        </div>
      </div>
    </div>
  );
}
