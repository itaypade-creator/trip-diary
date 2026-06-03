import type { OrderType } from '@/types';

/**
 * Order-type catalog. CLAUDE.md section 7.7.
 * Each entry: what it is / is not / when yes / when no / who it suits.
 *
 * SKELETON: ids only. Fill the explanatory copy when building the screen.
 */
export const ORDER_TYPES: OrderType[] = [
  'stop_loss',
  'stop_limit',
  'take_profit',
  'market',
  'limit',
];
