import { he } from './he';

// Single locale for now (Hebrew). Kept behind `strings` so screens never
// import a specific locale directly.
export const strings = he;
export type Strings = typeof he;
