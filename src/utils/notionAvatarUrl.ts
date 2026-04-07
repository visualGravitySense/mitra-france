/**
 * Hand-drawn Notion-style avatars (same source as the About page team preview).
 * @see https://www.dicebear.com/styles/notionists/
 */
export function notionStyleAvatarUrl(seed: string): string {
  return `https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(seed)}`;
}
