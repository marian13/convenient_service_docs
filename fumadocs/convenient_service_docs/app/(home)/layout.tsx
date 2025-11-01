import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

/**
 * NOTE: Adds `<title>Convenient Service</title>` and `<meta name="description" content="Convenient Service User Docs">`.
 * - https://nextjs.org/learn/dashboard-app/adding-metadata#page-title-and-descriptions
 * - https://github.com/fuma-nama/fumadocs/blob/646dd3ba78c8d27f94ef9d907ec4871dd8c1a19b/apps/docs/app/(home)/showcase/page.tsx#L20
 */
export const metadata = {
  title: {
    default: "Convenient Service"
  },
  description: "Convenient Service User Docs",
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}
