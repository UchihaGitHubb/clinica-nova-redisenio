import styles from './IncludesList.module.css';

type IncludesListProps = {
  items: readonly string[];
};

export function IncludesList({ items }: IncludesListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
