'use client';

import { useState, type FormEvent } from 'react';
import { Icon } from '@/components/ui/Icon';
import styles from './NewsletterForm.module.css';

const newsletterCopy = {
  label: 'Correo electrónico',
  placeholder: 'Tu correo',
  submit: 'Enviar',
  note: 'Esta propuesta no envía correos. Usa WhatsApp o el teléfono.',
  status: 'No se envió ningún correo.',
} as const;

export function NewsletterForm() {
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(newsletterCopy.status);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <label className="visually-hidden" htmlFor="footer-email">
        {newsletterCopy.label}
      </label>
      <div className={styles.row}>
        <input
          id="footer-email"
          className={styles.input}
          type="email"
          name="email"
          placeholder={newsletterCopy.placeholder}
          autoComplete="email"
        />
        <button type="submit" className={styles.submit} aria-label={newsletterCopy.submit}>
          <Icon name="send" size={16} />
        </button>
      </div>
      <p className={styles.note}>{newsletterCopy.note}</p>
      {status ? (
        <p className={styles.status} role="status">
          {status}
        </p>
      ) : null}
    </form>
  );
}
