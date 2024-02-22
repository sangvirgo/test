import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...className: clsx.ClassValue[]) {
  return twMerge(clsx(className));
}
