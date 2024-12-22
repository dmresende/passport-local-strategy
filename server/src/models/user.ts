import { v4 as uuidv4 } from "uuid";

export interface IUser {
  id: string;
  name: {
    first: string | null;
    last: string | null;
  };
  email: string;
  security: {
    passwordHash: string | null;
  };
  banned: boolean;
  create: Date;
}

export class User implements IUser {
  id: string;
  name: { first: string | null; last: string | null };
  email: string;
  security: { passwordHash: string | null };
  banned: boolean;
  create: Date;

  constructor(data?: Partial<IUser>) {
    this.id = data?.id || uuidv4();
    this.name = data?.name || { first: null, last: null };
    this.email = data?.email || "";
    this.security = data?.security || { passwordHash: null };
    this.banned = data?.banned || false;
    this.create = data?.create || new Date();
  }
}
