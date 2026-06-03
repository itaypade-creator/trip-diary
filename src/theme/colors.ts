/**
 * Brand colors. CLAUDE.md section 10.
 *
 * STATUS: final palette NOT decided yet (cool vs warm).
 * The demo currently uses the WARM palette, so it is the default here.
 * Swap to `coolPalette` once the brand decision is made.
 */

export const warmPalette = {
  background: '#FBF7F0', // cream
  primary: '#E8722C', // vivid orange
  heading: '#4A2E1C', // deep brown
  card: '#FFFFFF',
  textMuted: '#7A6A5A',
  warningYellow: '#E6A700',
  warningRed: '#C0392B',
};

export const coolPalette = {
  background: '#0E1726', // dark
  primary: '#1FB6A8', // turquoise
  heading: '#173B5E', // deep blue
  card: '#16233A',
  textMuted: '#8AA0B5',
  warningYellow: '#E6A700',
  warningRed: '#E05A4D',
};

// Active palette. Change this single line to switch the whole app.
export const colors = warmPalette;
