import { cn } from '@/lib/utils';

export type Social = { label: string; href: string };

export function HeroSocials({
  className,
  socials,
}: {
  className?: string;
  socials: Social[];
}) {
  return (
    <nav
      aria-label="Social links"
      className={cn('text-sm text-slate-400', className)}
    >
      {/* Desktop: vertical rail; Mobile: horizontal bar */}
      <ul className="hidden md:flex flex-col items-end gap-4">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              className="transition-colors hover:text-[#0A2A5E]"
              aria-label={`Visit our ${s.label} page`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className="md:hidden flex justify-center gap-6">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              className="transition-colors hover:text-[#0A2A5E]"
              aria-label={`Visit our ${s.label} page`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
