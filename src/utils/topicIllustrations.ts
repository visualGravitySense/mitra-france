/**
 * Notion-style illustration assets under /public/illustrations.
 * Used for partner cards, landing hero, and thematic sections.
 */
export const topicIllustrations = {
  interculturalInclusion: '/illustrations/intercultural.jpg',
  mediaArts: '/illustrations/media-arts.jpg',
  digitalInclusion: '/illustrations/digital-literacy.jpg',
  /** Hero / Erasmus / international */
  countries: '/illustrations/about-countries.jpg',
  community: '/illustrations/join-our-community.jpg',
  participants: '/illustrations/participants.jpg',
  programs: '/illustrations/programs.jpg',
  organization: '/illustrations/organization.jpg',
  galleryCulture: '/illustrations/gallery.jpg',
  volunteer: '/illustrations/volunteer.jpg',
  learnMore: '/illustrations/learn-more.jpg',
  events: '/illustrations/events.jpg',
  activePrograms: '/illustrations/active-programs.jpg',
  youth: '/illustrations/youth.jpg',
  senior: '/illustrations/senior.jpg',
} as const;

export type TopicIllustrationKey = keyof typeof topicIllustrations;
