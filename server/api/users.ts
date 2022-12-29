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

import { createUser } from "@/server/repositories/userRepository";

export default async (event: H3Event) => {
  const body = await readBody(event);
  const user = await createUser(body);

  return user;
};
