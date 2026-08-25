import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { cx } from '@/lib/cx';
import { Icon } from '@/components/ui/Icon';
import styles from './Field.module.css';

type FieldShellProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

function FieldShell({ id, label, required = false, error, children }: FieldShellProps) {
  const errorId = `${id}-error`;

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required ? (
          <span className={styles.required} aria-hidden="true">
            {' '}
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} className={styles.error} role="alert">
          <Icon name="alert-circle" size={16} className={styles.errorIcon} />
          {error}
        </p>
      ) : null}
    </div>
  );
}

type TextFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'className'>;

export function TextField({ id, label, required, error, ...rest }: TextFieldProps) {
  return (
    <FieldShell id={id} label={label} required={required} error={error}>
      <input
        id={id}
        className={cx(styles.control, error && styles.invalid)}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
    </FieldShell>
  );
}

type SelectFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id' | 'className'>;

export function SelectField({
  id,
  label,
  required,
  error,
  children,
  ...rest
}: SelectFieldProps) {
  return (
    <FieldShell id={id} label={label} required={required} error={error}>
      <select
        id={id}
        className={cx(styles.select, error && styles.invalid)}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      >
        {children}
      </select>
    </FieldShell>
  );
}

type AreaFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id' | 'className'>;

export function AreaField({ id, label, required, error, ...rest }: AreaFieldProps) {
  return (
    <FieldShell id={id} label={label} required={required} error={error}>
      <textarea
        id={id}
        className={cx(styles.textarea, error && styles.invalid)}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
    </FieldShell>
  );
}

type CheckFieldProps = {
  id: string;
  label: ReactNode;
  required?: boolean;
  error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'type' | 'className'>;

export function CheckField({ id, label, required, error, ...rest }: CheckFieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.check} htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          className={cx(styles.box, error && styles.invalid)}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        />
        <span className={styles.checkLabel}>{label}</span>
      </label>
      {error ? (
        <p id={`${id}-error`} className={styles.error} role="alert">
          <Icon name="alert-circle" size={16} className={styles.errorIcon} />
          {error}
        </p>
      ) : null}
    </div>
  );
}
