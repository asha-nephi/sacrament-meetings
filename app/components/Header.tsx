import { WARD_NAME } from "@/lib/config";
import { formatDate, toISODateString } from "@/lib/format";
import NavLinks from "./NavLinks";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "Meetings" },
];

export default function Header() {
  const today = toISODateString(new Date());

  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-4">
        <div>
          <p className="text-lg font-semibold leading-tight">{WARD_NAME}</p>
          <p className="text-sm text-muted">{formatDate(today)}</p>
        </div>
        <NavLinks links={NAV_LINKS} />
      </div>
    </header>
  );
}
