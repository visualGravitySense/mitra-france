import { getImagePath } from './imagePath';
/** Official wordmark: navy on transparent (`public/mitra-logo.png`) */
export const MITRA_LOGO_PATH = '/mitra-logo.png';
export function getMitraLogoSrc() {
    return getImagePath(MITRA_LOGO_PATH);
}
/** Improve contrast on dark surfaces (navy → near-white) */
export function mitraLogoThemeFilter(theme) {
    return theme.palette.mode === 'dark' ? { filter: 'brightness(0) invert(1)' } : {};
}
