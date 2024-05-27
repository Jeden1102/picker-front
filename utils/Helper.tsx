import { cookies } from "next/headers";

export function getLocalStorage(key: string, defaultValue: boolean | null) {
  const stickyValue = localStorage.getItem(key);

  return stickyValue !== null && stickyValue !== "undefined"
    ? JSON.parse(stickyValue)
    : defaultValue;
}

export function setLocalStorage(key: string, value: boolean | null) {
  localStorage.setItem(key, JSON.stringify(value));
}
