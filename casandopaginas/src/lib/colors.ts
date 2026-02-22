/**
 * Paleta de colores oficial - Casamiento Caro & Lauti
 *
 * Protagonistas (según logo): navy y sky
 * Secundarios: sage y cream
 */
export const weddingColors = {
  sky: "#AAC5E5", // Azul cielo - acentos secundarios, fondos de secciones alternas
  cream: "#FDFFFA", // Blanco crema - fondo principal de la página
  sage: "#BED5C8", // Verde salvia - acentos sutiles, separadores, hovers
  navy: "#0A2140", // Azul marino profundo - texto, botones, encabezados
} as const;

export type WeddingColorKey = keyof typeof weddingColors;

/**
 * Uso de colores por rol semántico
 */
export const colorRoles = {
  background: weddingColors.cream,
  backgroundAlt: weddingColors.sky,
  backgroundAccent: weddingColors.sage,
  primary: weddingColors.navy,
  text: weddingColors.navy,
  textLight: "#ffffff",
  accent: weddingColors.sky,
  accentDark: weddingColors.navy,
  border: weddingColors.sage,
} as const;
