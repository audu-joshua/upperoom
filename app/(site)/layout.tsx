import { GiveShell } from "@/components/giving/GiveShell";
import { Navbar } from "@/components/layout/Navbar";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GiveShell>
      <Navbar />
      {children}
    </GiveShell>
  );
}
