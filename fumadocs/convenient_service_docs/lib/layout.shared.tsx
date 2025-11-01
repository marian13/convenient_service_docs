import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      /**
       * NOTE: Copied from Fumadocs own docs.
       * - https://github.com/fuma-nama/fumadocs/blob/646dd3ba78c8d27f94ef9d907ec4871dd8c1a19b/apps/docs/app/docs/layout.tsx#L20
       */
      title: (
        <>
          <img
            src="/logo.png"
            alt="Convenient Service Logo"
            className="h-8 w-auto"
          />

          <span className="font-medium [.uwu_&]:hidden max-md:hidden">
            Convenient Service
          </span>
        </>
      ),
    }
  };
}
