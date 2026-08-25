import { PageFrame } from '@/components/layout/PageFrame';
import type { ReactNode } from 'react';

export default function AgendarLayout({ children }: { children: ReactNode }) {
  return <PageFrame>{children}</PageFrame>;
}
