import { WARD_NAME } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-muted">
        &copy; {year} {WARD_NAME}. All are welcome to attend.
      </div>
    </footer>
  );
}
