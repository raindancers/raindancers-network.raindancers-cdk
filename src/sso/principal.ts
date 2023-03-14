export enum PrincipalTypes {
  USER = 'USER',
  GROUP = 'GROUP',
}

export interface PrincipalProperty {
  /**
	 * The id of the principal.
	 */
  readonly principalId: string;
  /**
	 * The type of the principal.
	 */
  readonly principalType: PrincipalTypes;
}