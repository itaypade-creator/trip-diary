/**
 * Shared domain types. CLAUDE.md sections 7.4 and 9.
 * Skeleton — shapes are a starting point, refine when building the calculator.
 */

export type Direction = 'long' | 'short'; // Buy / Sell

export type OrderType =
  | 'market'
  | 'stop_loss'
  | 'stop_limit'
  | 'take_profit'
  | 'limit';

export interface TradeInput {
  direction: Direction;
  entryPrice: number;
  capital: number; // הון לעסקה
  riskPercent: number; // אחוז סיכון מההון
  riskRewardRatio: number;
  orderType: OrderType;
}

export interface TradeResult {
  stopPrice: number;
  takeProfitPrice: number;
  positionSize: number;
  maxLoss: number;
  potentialProfit: number;
}

export type WarningLevel = 'yellow' | 'red';

export interface Warning {
  level: WarningLevel;
  short: string; // shown in free tier
  full?: string; // Premium-only explanation
}
