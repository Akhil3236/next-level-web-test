import { users } from "./user";

export function getUserFromRequest(req: Request) {
  const userId = req.headers.get("x-user-id");
  if (!userId) return null;

  return users.find(u => u.id === userId) || null;
}
