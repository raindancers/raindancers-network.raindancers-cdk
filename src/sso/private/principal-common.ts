
import { PrincipalProperty } from '../principal';

export function validatePrincipal(principal: PrincipalProperty): void {
  if (!principal.principalId.match(/^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$/)) {
    throw new Error(`PrincipalId must be a valid GUID: ${principal.principalId}`);
  }
}