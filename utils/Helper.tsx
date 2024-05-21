import { cookies } from "next/headers";

export function getLocalStorage(key: string, defaultValue: boolean) {
  const stickyValue = localStorage.getItem(key);

  return stickyValue !== null && stickyValue !== "undefined"
    ? JSON.parse(stickyValue)
    : defaultValue;
}

export function setLocalStorage(key: string, value: boolean) {
  localStorage.setItem(key, JSON.stringify(value));
}
