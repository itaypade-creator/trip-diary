/**
 * Premium / entitlement state. CLAUDE.md sections 4 and 8.
 * One-time purchase, no subscription. Offline.
 *
 * SKELETON: hardcoded to free. Real entitlement + Restore Purchase later.
 */

export function useIsPremium(): boolean {
  return false;
}

// Demo price (CLAUDE.md section 4). Final price TBD.
export const ONE_TIME_PRICE = '$19.99';
