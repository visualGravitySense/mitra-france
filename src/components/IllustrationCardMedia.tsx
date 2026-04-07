import Box from '@mui/material/Box';
import { getImagePath } from '../utils/imagePath';

type IllustrationCardMediaProps = {
  src: string;
  alt?: string;
  /** Pixel height(s) of the tinted media band; illustration uses object-fit: contain inside. */
  height?: { xs: number; sm?: number; md?: number };
  /** Photo fills the band edge-to-edge (no padding, object-fit: cover). */
  edgeToEdge?: boolean;
};

export function IllustrationCardMedia({
  src,
  alt = '',
  height = { xs: 160, sm: 180 },
  edgeToEdge = false,
}: IllustrationCardMediaProps) {
  const resolved = getImagePath(src);
  if (edgeToEdge) {
    return (
      <Box
        sx={{
          height,
          width: '100%',
          flexShrink: 0,
          borderBottom: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        <Box
          component="img"
          src={resolved}
          alt={alt}
          loading="lazy"
          decoding="async"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height,
        width: '100%',
        flexShrink: 0,
        bgcolor: 'rgba(0, 35, 149, 0.05)',
        backgroundImage:
          'linear-gradient(180deg, rgba(0, 35, 149, 0.07) 0%, rgba(245, 247, 250, 1) 45%, rgba(250, 250, 252, 1) 100%)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 1.5, sm: 2 },
        py: { xs: 1.25, sm: 1.5 },
        boxSizing: 'border-box',
      }}
    >
      <Box
        component="img"
        src={resolved}
        alt={alt}
        loading="lazy"
        decoding="async"
        sx={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          objectPosition: 'center',
          display: 'block',
        }}
      />
    </Box>
  );
}

const HERO_TILE_ASPECT = 1.05;

type IllustrationHeroTileProps = {
  src: string;
  alt?: string;
  /** Slight stagger for collage rhythm */
  translateY?: number;
};

export function IllustrationHeroTile({ src, alt = '', translateY = 0 }: IllustrationHeroTileProps) {
  const resolved = getImagePath(src);
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: HERO_TILE_ASPECT,
        maxHeight: { xs: 170, sm: 190 },
        borderRadius: 2,
        overflow: 'hidden',
        bgcolor: 'rgba(0, 35, 149, 0.06)',
        backgroundImage:
          'linear-gradient(165deg, rgba(0, 35, 149, 0.09) 0%, rgba(245, 247, 250, 1) 50%, rgba(255,255,255,1) 100%)',
        border: '1px solid',
        borderColor: 'rgba(0, 35, 149, 0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 0,
        boxShadow: '0 8px 22px rgba(0, 35, 149, 0.12)',
        transform: translateY !== 0 ? `translateY(${translateY}px)` : undefined,
      }}
    >
      {resolved ? (
        <Box
          component="img"
          src={resolved}
          alt={alt}
          loading="lazy"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      ) : null}
    </Box>
  );
}
