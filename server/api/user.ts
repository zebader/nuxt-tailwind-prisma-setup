import type { IncomingMessage, ServerResponse } from "http";
import {
  H3Event,
  sendError,
  readBody,
  getCookie,
  getQuery,
  setCookie,
  eventHandler,
} from "h3";

import { getUserByEmail } from "@/server/repositories/userRepository";

export default async (event: H3Event) => {
  const body = await getQuery(event);
  const user = await getUserByEmail(body.email);

  return user;
};
