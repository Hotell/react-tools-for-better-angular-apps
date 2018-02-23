export const INC = 'increment';
export const DEC = 'decrement';

export class IncAction {
  readonly type = INC;
}
export class DecAction {
  readonly type = DEC;
}

export type Action = IncAction | DecAction;
