import { proceduresCopy } from '@/lib/content/procedures';
import styles from './MedicalNotice.module.css';

type MedicalNoticeProps = {
  compact?: boolean;
};

export function MedicalNotice({ compact = false }: MedicalNoticeProps) {
  return (
    <p className={compact ? `${styles.notice} ${styles.compact}` : styles.notice}>
      {proceduresCopy.medicalNotice}
    </p>
  );
}
