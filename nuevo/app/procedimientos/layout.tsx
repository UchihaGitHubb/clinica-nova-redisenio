import { PageFrame } from '@/components/layout/PageFrame';
import type { ReactNode } from 'react';

export default function ProcedimientosLayout({ children }: { children: ReactNode }) {
  return <PageFrame>{children}</PageFrame>;
}
