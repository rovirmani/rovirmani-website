import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Style utilities
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Set utilities
export const toggleSet = (set: Set<string>, item: string): Set<string> => {
  const newSet = new Set(set);
  if (newSet.has(item)) {
    newSet.delete(item);
  } else {
    newSet.add(item);
  }
  return newSet;
}
