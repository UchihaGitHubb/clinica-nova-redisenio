import { proposalCopy } from '@/lib/content/proposal';
import { cx } from '@/lib/cx';
import styles from './ProposalNote.module.css';

type ProposalNoteProps = {
  children: string;
  className?: string;
};

export function ProposalNote({ children, className }: ProposalNoteProps) {
  return (
    <aside className={cx(styles.note, className)} aria-label={proposalCopy.mark}>
      <p className={styles.mark}>{proposalCopy.mark}</p>
      <p className={styles.body}>{children}</p>
    </aside>
  );
}
