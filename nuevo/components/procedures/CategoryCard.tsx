import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { cx } from '@/lib/cx';
import type { ProcedureCategory } from '@/lib/content/procedure-categories';
import styles from './CategoryCard.module.css';

type CategoryCardProps = {
  category: ProcedureCategory;
  count: number;
  featured?: boolean;
};

export function CategoryCard({ category, count, featured = false }: CategoryCardProps) {
  return (
    <Link href={category.href} className={cx(styles.card, featured && styles.featured)}>
      <div className={styles.media}>
        {category.image ? (
          <Image
            src={category.image.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 32vw, 100vw"
            className={styles.photo}
          />
        ) : (
          <PlaceholderImage ratio="portrait" tone="cool" className={styles.fallback} />
        )}
        <span className={styles.shade} aria-hidden="true" />
      </div>
      <div className={styles.meta}>
        <div>
          <p className={styles.count}>
            {String(count).padStart(2, '0')} procedimientos
          </p>
          <h2 className={styles.label}>{category.label}</h2>
          <p className={styles.tags}>{category.tags.join(' · ')}</p>
        </div>
        <span className={styles.arrow} aria-hidden="true">
          <Icon name="arrow-right" size={16} />
        </span>
      </div>
    </Link>
  );
}
