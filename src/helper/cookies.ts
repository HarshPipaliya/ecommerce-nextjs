import { CookieItems } from "@/constants/cookies.const";
import { parseCookies, setCookie as setNookie } from "nookies";

export const getCookie = (key: keyof typeof CookieItems) => {
  const cookies = parseCookies();
  return cookies[key];
};

export const setCookie = (key: keyof typeof CookieItems, value: any) => {
  setNookie(null, String(key), value);
};
