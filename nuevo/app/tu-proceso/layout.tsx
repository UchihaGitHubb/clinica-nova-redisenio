import { PageFrame } from '@/components/layout/PageFrame';
import type { ReactNode } from 'react';

export default function TuProcesoLayout({ children }: { children: ReactNode }) {
  return <PageFrame>{children}</PageFrame>;
}
