import Image from 'next/image';
import { convenios as copy } from '@/lib/content/home';
import { convenios } from '@/lib/content/convenios';
import styles from './ConveniosStrip.module.css';

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className={styles.track} aria-hidden={hidden || undefined}>
      {convenios.map((convenio) => (
        <li key={`${hidden ? 'loop' : 'live'}-${convenio.id}`} className={styles.item}>
          <Image
            src={convenio.logo.src}
            alt={hidden ? '' : convenio.name}
            width={convenio.logo.width}
            height={convenio.logo.height}
            className={styles.logo}
          />
        </li>
      ))}
    </ul>
  );
}

export function ConveniosStrip() {
  return (
    <div className={styles.block}>
      <h3 id="convenios-title" className={styles.title}>
        {copy.overline}
      </h3>
      <div className={styles.viewport} aria-labelledby="convenios-title">
        <div className={styles.rail}>
          <Track />
          <Track hidden />
        </div>
      </div>
    </div>
  );
}
