import type { ReactNode } from 'react';
import styles from './Icon.module.css';
import { cx } from '@/lib/cx';

export type IconName =
  | 'menu'
  | 'close'
  | 'chevron-down'
  | 'arrow-right'
  | 'whatsapp'
  | 'phone'
  | 'pin'
  | 'cross'
  | 'building'
  | 'bloom'
  | 'users'
  | 'chat'
  | 'clipboard'
  | 'path'
  | 'care'
  | 'quote'
  | 'mouse'
  | 'send'
  | 'mail'
  | 'check'
  | 'alert-circle'
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'youtube';

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 20, className }: IconProps) {
  const filled =
    name === 'whatsapp' || name === 'quote' || name === 'facebook' || name === 'youtube';

  return (
    <svg
      className={cx(styles.icon, className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={filled ? undefined : 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

const paths: Record<IconName, ReactNode> = {
  menu: (
    <>
      <line x1="2" y1="9" x2="22" y2="9" />
      <line x1="2" y1="15" x2="22" y2="15" />
    </>
  ),
  close: (
    <>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </>
  ),
  'chevron-down': <polyline points="5 9 12 16 19 9" />,
  'arrow-right': (
    <>
      <line x1="3" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </>
  ),
  whatsapp: (
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 18.15h-.01c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.21.84.86-3.13-.2-.32a8.21 8.21 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.29-.29.43-.44.15-.14.19-.25.29-.41.1-.17.05-.31-.03-.44-.07-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.16 1.73 2.65 4.2 3.72.59.25 1.04.4 1.4.51.6.19 1.15.16 1.58.1.48-.07 1.49-.61 1.7-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.16-.48-.28z" />
  ),
  phone: (
    <path d="M6.6 3h-2A1.6 1.6 0 0 0 3 4.6C3 12.6 11.4 21 19.4 21a1.6 1.6 0 0 0 1.6-1.6v-2a1 1 0 0 0-.7-1l-3.5-1.1a1 1 0 0 0-1 .3l-1 1.1a14 14 0 0 1-5.5-5.5l1.1-1a1 1 0 0 0 .3-1L9.6 3.7a1 1 0 0 0-1-.7z" />
  ),
  pin: (
    <>
      <path d="M20 10.5c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10.5" r="2.75" />
    </>
  ),
  cross: (
    <>
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <line x1="9" y1="7" x2="9" y2="7.01" />
      <line x1="12" y1="7" x2="12" y2="7.01" />
      <line x1="15" y1="7" x2="15" y2="7.01" />
      <line x1="9" y1="11" x2="9" y2="11.01" />
      <line x1="12" y1="11" x2="12" y2="11.01" />
      <line x1="15" y1="11" x2="15" y2="11.01" />
      <path d="M9 21v-4h6v4" />
    </>
  ),
  bloom: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5c1.5 2 1.5 4 0 4s-1.5-2 0-4z" />
      <path d="M12 19c-1.5-2-1.5-4 0-4s1.5 2 0 4z" />
      <path d="M5 12c2 1.5 4 1.5 4 0s-2-1.5-4 0z" />
      <path d="M19 12c-2-1.5-4-1.5-4 0s2 1.5 4 0z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.6-3 2.7-5 5.5-5s4.9 2 5.5 5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M21.5 19c-.4-2.2-1.8-3.8-3.8-4.4" />
    </>
  ),
  chat: (
    <>
      <path d="M4 6h16v10H8l-4 3V6z" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="16" rx="1.5" />
      <path d="M9 4.5h6v2H9z" />
      <line x1="9" y1="11" x2="15" y2="11" />
      <line x1="9" y1="15" x2="13" y2="15" />
    </>
  ),
  path: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 7.5c4 0 4 9 8 9" />
    </>
  ),
  care: (
    <>
      <path d="M12 20s-7-4.4-7-9.2C5 8 7 6 9.2 6c1.3 0 2.4.6 2.8 1.6C12.4 6.6 13.5 6 14.8 6 17 6 19 8 19 10.8 19 15.6 12 20 12 20z" />
    </>
  ),
  quote: (
    <path d="M7.2 18c-2 0-3.7-1.6-3.7-3.8 0-2.6 1.8-5.4 5-7.4l.8 1.3C7.6 9.4 6.4 11 6.6 12.4 7.2 12 8 12 8.8 12.4c1.2.6 1.9 1.8 1.9 3.1S9.3 18 7.2 18zm9.3 0c-2 0-3.7-1.6-3.7-3.8 0-2.6 1.8-5.4 5-7.4l.8 1.3c-1.7 1.3-2.9 2.9-2.7 4.3.6-.4 1.4-.4 2.2 0 1.2.6 1.9 1.8 1.9 3.1s-1.4 2.5-3.5 2.5z" />
  ),
  mouse: (
    <>
      <rect x="8" y="3" width="8" height="14" rx="4" />
      <line x1="12" y1="6" x2="12" y2="9" />
    </>
  ),
  send: (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3 7l9 7 9-7" />
    </>
  ),
  check: <polyline points="5 12 10 17 19 7" />,
  'alert-circle': (
    <>
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
  ),
  tiktok: (
    <path d="M14.2 3.5v8.4a3.6 3.6 0 1 1-2.5-3.4V6.2c1 .5 2.1.9 3.3 1.1V3.5c1.1.1 2.2-.3 3.2-1v2.1c-1.3.5-2.6.8-3.9.9z" />
  ),
  youtube: (
    <path
      fillRule="evenodd"
      d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.9C18.2 5 12 5 12 5s-6.2 0-7.8.3a2.6 2.6 0 0 0-1.8 1.9A27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.9C5.8 19 12 19 12 19s6.2 0 7.8-.3a2.6 2.6 0 0 0 1.8-1.9A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8zM10 9.2v5.6L15.6 12 10 9.2z"
    />
  ),
};
