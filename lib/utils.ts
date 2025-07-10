import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

export const formatRelativeTime = (isoString: string) => {
  const date = new Date(isoString);
  return formatDistanceToNow(date, { addSuffix: true });
};

export const getInitials = (name: string) => {
  if (!name || typeof name !== "string") return "";

  return name
    .trim()
    .split(/\s+/) // Split on whitespace
    .map((word) => word[0].toUpperCase()) // Get first letter of each word
    .slice(0, 3) // Max 3 initials
    .join("");
};
