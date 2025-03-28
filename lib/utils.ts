import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const openStudioInNewTab = () => {
  const studioLink = `https://leoapex.com/`;
  window.open(studioLink, '_blank', 'noopener,noreferrer');
};