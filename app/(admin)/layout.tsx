export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      {/* Authentication scaffolded in Week 05 */}
      {children}
    </div>
  );
}
