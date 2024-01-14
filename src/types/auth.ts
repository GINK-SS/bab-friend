export enum AuthStatus {
  authorized,
  pending,
  unauthorized,
}

export type AuthState = {
  authStatus: AuthStatus;
};
