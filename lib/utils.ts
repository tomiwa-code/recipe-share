import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, formatDistanceToNow, parseISO } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Formats a given ISO date string to a human-readable relative time format.
 * For example, "2023-10-01T12:00:00Z" will be formatted as "2 days ago".
 *
 * @param {string} isoString - The ISO date string to format.
 * @returns {string} - A string representing the relative time from now.
 */
export const formatRelativeTime = (isoString: string) => {
  const date = new Date(isoString);
  return formatDistanceToNow(date, { addSuffix: true });
};

/**
 * Generates initials from a given name.
 * The initials are derived from the first letter of each word in the name,
 * up to a maximum of three initials.
 *
 * @param {string} name - The name from which to extract initials.
 * @returns {string} - A string containing the initials, or an empty string if the input is invalid.
 */
export const getInitials = (name: string) => {
  if (!name || typeof name !== "string") return "";

  return name
    .trim()
    .split(/\s+/) // Split on whitespace
    .map((word) => word[0].toUpperCase()) // Get first letter of each word
    .slice(0, 3) // Max 3 initials
    .join("");
};

/**
 * Extracts the unique ID from a given URL.
 * The unique ID is expected to be the part after the "@" symbol.
 *
 * @param {string} url - The URL string from which to extract the unique ID.
 * @returns {string} - The extracted unique ID or an empty string if not found.
 */
export const extractUniqueId = (url: string) => {
  const getRealUrl = decodeURIComponent(url);
  const uniqueId = getRealUrl.split("@")[1];

  return uniqueId ?? "";
};

/**
 * Formats an ISO date string to a readable date (e.g., "10 July 2023")
 * @param isoString - ISO date string (e.g., "2023-07-10T01:40:00Z")
 * @returns Formatted date string
 */
export const formatDate = (isoString: string): string => {
  try {
    return format(parseISO(isoString), "dd MMMM yyyy");
  } catch (error) {
    console.error("Invalid date format:", isoString);
    return "Invalid date";
  }
};
