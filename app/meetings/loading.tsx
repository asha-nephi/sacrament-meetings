export default function MeetingsLoading() {
  return (
    <div aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading meetings…</span>
      <div className="grid gap-4 sm:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-28 animate-pulse rounded-card border border-border bg-surface"
          />
        ))}
      </div>
    </div>
  );
}
