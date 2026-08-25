import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import {
  agendarHref,
  getCategory,
  whatsappHref,
  type Procedure,
} from '@/lib/content/procedures';
import { site } from '@/lib/site';
import styles from './ProcedureAside.module.css';

type ProcedureAsideProps = {
  procedure: Procedure;
};

export function ProcedureAside({ procedure }: ProcedureAsideProps) {
  const category = getCategory(procedure.category);

  return (
    <aside className={styles.aside} aria-label="Agendar este procedimiento">
      <p className={styles.category}>{category.label}</p>
      <p className={styles.name}>{procedure.name}</p>
      <p className={styles.hint}>El siguiente paso es una conversación.</p>
      <ButtonLink href={agendarHref(procedure.slug)} variant="primary" fullWidth>
        {site.cta.label}
      </ButtonLink>
      <ButtonLink
        href={whatsappHref(procedure.name)}
        variant="whatsapp"
        fullWidth
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="whatsapp" size={18} />
        Consultar por WhatsApp
      </ButtonLink>
      <a href={site.contact.phone.href} className={styles.phone}>
        {site.contact.phone.display}
      </a>
    </aside>
  );
}
