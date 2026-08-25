'use client';

import Link from 'next/link';
import { useMemo, useState, type FormEvent } from 'react';
import { Button, ButtonLink } from '@/components/ui/Button';
import { AreaField, CheckField, SelectField, TextField } from '@/components/ui/Field';
import { Icon } from '@/components/ui/Icon';
import {
  bookingCopy,
  bookingGroups,
  bookingWhatsappHref,
} from '@/lib/content/booking';
import { getProcedure } from '@/lib/content/procedures';
import { site } from '@/lib/site';
import styles from './BookingForm.module.css';

type BookingFormProps = {
  initialProcedure?: string;
  initialSpecialist?: string;
  interestLabel?: string | null;
};

type Errors = {
  name?: string;
  phone?: string;
  consent?: string;
};

function digits(value: string) {
  return value.replace(/\D/g, '');
}

export function BookingForm({
  initialProcedure = '',
  initialSpecialist = '',
  interestLabel = null,
}: BookingFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [procedure, setProcedure] = useState(initialProcedure);
  const [specialist, setSpecialist] = useState(initialSpecialist);
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [acknowledged, setAcknowledged] = useState(false);

  const selectedName = useMemo(() => {
    if (procedure) return getProcedure(procedure)?.name ?? interestLabel;
    return interestLabel;
  }, [interestLabel, procedure]);

  const validate = (): Errors => {
    const next: Errors = {};
    if (!name.trim()) next.name = bookingCopy.errors.name;
    if (digits(phone).length < 7) next.phone = bookingCopy.errors.phone;
    if (!consent) next.consent = bookingCopy.errors.consent;
    return next;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setAcknowledged(true);
  };

  if (acknowledged) {
    return (
      <div className={styles.success} role="status">
        <p className={styles.successRule} aria-hidden="true" />
        <h3 className={styles.successTitle}>{bookingCopy.successTitle}</h3>
        <p className={styles.successBody}>{bookingCopy.successBody}</p>
        <div className={styles.successActions}>
          <ButtonLink
            href={bookingWhatsappHref(selectedName)}
            variant="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={16} />
            {bookingCopy.whatsappLabel}
          </ButtonLink>
          <a href={site.contact.phone.href} className={styles.successPhone}>
            {site.contact.phone.display}
          </a>
        </div>
        <p className={styles.exploreLabel}>{bookingCopy.successExplore}</p>
        <div className={styles.explore}>
          <Link href="/procedimientos">{bookingCopy.exploreProcedures}</Link>
          <Link href="/">{bookingCopy.exploreHome}</Link>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.head}>
        <p className={styles.overline}>{bookingCopy.formOverline}</p>
        <h2 id="booking-form-title" className={styles.title}>
          {bookingCopy.formTitle}
        </h2>
        <p id="booking-form-hint" className={styles.hint}>
          {bookingCopy.formHint}
        </p>
        {interestLabel ? (
          <p className={styles.context}>
            {bookingCopy.contextPrefix}: {interestLabel}
          </p>
        ) : null}
      </div>

      <TextField
        id="booking-name"
        label={bookingCopy.fields.name.label}
        required
        autoComplete="name"
        value={name}
        error={errors.name}
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        id="booking-phone"
        label={bookingCopy.fields.phone.label}
        required
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        placeholder={bookingCopy.fields.phone.placeholder}
        value={phone}
        error={errors.phone}
        onChange={(event) => setPhone(event.target.value)}
      />

      <TextField
        id="booking-email"
        label={bookingCopy.fields.email.label}
        type="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <SelectField
        id="booking-procedure"
        label={bookingCopy.fields.procedure.label}
        value={procedure}
        onChange={(event) => setProcedure(event.target.value)}
      >
        <option value="">{bookingCopy.fields.procedure.empty}</option>
        {bookingGroups.map((group) => (
          <optgroup key={group.id} label={group.label}>
            {group.items.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </optgroup>
        ))}
      </SelectField>

      <TextField
        id="booking-specialist"
        label={bookingCopy.fields.specialist.label}
        autoComplete="off"
        value={specialist}
        onChange={(event) => setSpecialist(event.target.value)}
      />

      <TextField
        id="booking-city"
        label={bookingCopy.fields.city.label}
        autoComplete="address-level2"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <AreaField
        id="booking-message"
        label={bookingCopy.fields.message.label}
        rows={4}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <CheckField
        id="booking-consent"
        required
        checked={consent}
        error={errors.consent}
        onChange={(event) => setConsent(event.target.checked)}
        label={
          <>
            {bookingCopy.fields.consent.label}{' '}
            <Link href={site.legal.privacy.href}>{site.legal.privacy.label}</Link>
          </>
        }
      />

      <Button
        type="submit"
        variant="primary"
        className={styles.submit}
        aria-describedby="booking-form-hint"
      >
        {bookingCopy.submit}
      </Button>
    </form>
  );
}
