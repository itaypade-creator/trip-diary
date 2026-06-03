import type { TradeInput, Warning } from '@/types';

/**
 * Warning engine. CLAUDE.md section 9.
 *  - Yellow: Risk % > 2, R:R < 1.5
 *  - Red:    Stop Limit in a volatile market
 *
 * SKELETON: not implemented. Returns no warnings for now.
 */
export function evaluateWarnings(_input: TradeInput): Warning[] {
  return [];
}
