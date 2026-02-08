import { Role } from "./user";

export function hasRole(userRole: Role, required: Role) {
  return userRole === required;
}

