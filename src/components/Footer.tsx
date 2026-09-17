export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground px-5 py-10 text-background md:px-8 md:py-12">
      <div className="mx-auto max-w-[1500px]">

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          {/* NAME */}
          <div>
            <h2 className="font-display text-3xl font-bold tracking-[-0.04em] md:text-5xl">
              TIAN SAPUTRA
            </h2>

            <p className="mt-2 text-[10px] uppercase tracking-[0.16em] opacity-60 md:text-xs">
              INFORMATION SYSTEMS / WEB DEVELOPER
            </p>
          </div>

          {/* COPYRIGHT */}
          <p className="text-[9px] uppercase tracking-[0.12em] opacity-45 md:text-xs">
            © 2026 TIAN SAPUTRA. ALL RIGHTS RESERVED.
          </p>

        </div>

      </div>
    </footer>
  );
}