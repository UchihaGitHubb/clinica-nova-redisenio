import { PENDING_SPEC, specLabels } from '@/lib/content/procedures';
import styles from './SpecSheet.module.css';

export type SpecRow = {
  label: string;
  value: string;
};

type SpecSheetProps = {
  rows?: readonly SpecRow[];
};

export function SpecSheet({ rows }: SpecSheetProps) {
  const list =
    rows ?? specLabels.map((label) => ({ label, value: PENDING_SPEC }));

  return (
    <dl className={styles.sheet}>
      {list.map((row) => (
        <div key={row.label} className={styles.row}>
          <dt className={styles.label}>{row.label}</dt>
          <dd className={styles.value}>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
