import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { navItems, socials, type NavItemId } from "@/data/socials";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/icons";

const ids = navItems.map((n) => n.id);

export function Nav() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <a
          href="#hero"
          onClick={close}
          className="font-mono text-sm font-medium tracking-tight text-fg"
        >
          noan<span className="text-accent">.</span>works
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "inline-flex h-9 items-center rounded-md px-3 text-sm transition-colors",
                    active === item.id
                      ? "text-fg"
                      : "text-muted hover:text-fg"
                  )}
                  aria-current={active === item.id ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex">
          <Button
            as="a"
            href="#contact"
            size="sm"
            variant="primary"
          >
            Get in touch
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-fg md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-bg md:hidden"
        >
          <ul className="flex flex-col px-6 py-3 sm:px-8">
            {navItems.map((item: { id: NavItemId; label: string }) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={close}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm transition-colors",
                    active === item.id
                      ? "text-fg"
                      : "text-muted hover:text-fg"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 border-t border-border pt-3">
              <Button
                as="a"
                href={socials.emailHref}
                variant="primary"
                className="w-full"
                onClick={close}
              >
                Get in touch
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
