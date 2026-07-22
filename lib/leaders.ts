export type Leader = {
  slug: string;
  name: string;
  role: string;
  image: string;
  /** CSS object-position for portrait crops */
  imageFocus?: string;
  facebookUrl: string;
  email?: string;
  shortBio: string;
  bio: string[];
  highlights: string[];
};

export const leaders: Leader[] = [
  {
    slug: "bishop-peter-makanto",
    name: "Bishop Peter Makanto",
    role: "Presiding Bishop, Upper Room Worldwide",
    image: "/papa.webp",
    imageFocus: "50% 18%",
    facebookUrl: "https://web.facebook.com/profile.php?id=100060742341781",
    email: "upperroomcathedralyola@gmail.com",
    shortBio:
      "Founder of Upper Room Churches Worldwide — an anointed man of God devoted to prayer and the ministry of the Word.",
    bio: [
      "Bishop Peter Makanto is the founder of Upper Room Churches Worldwide and the Presiding Bishop of Upper Room Cathedral. An anointed man of God, he has given himself continually to prayer and to the ministry of the Word for the salvation and establishment of souls in the Kingdom.",
      "Under his apostolic covering, Upper Room has grown across Yola, Numan, and Abuja — raising believers who walk in spiritual excellence and carry the presence of God into every sphere of life.",
      "His life and ministry remain marked by compassion, signs and wonders, and an unwavering call to change lives through the preaching and teaching of God's Word.",
    ],
    highlights: [
      "Founder, Upper Room Churches Worldwide",
      "Presiding Bishop, Upper Room Cathedral",
      "Ministry rooted in prayer and the Word",
    ],
  },
  {
    slug: "pastor-esther-makanto",
    name: "Pastor Esther Makanto",
    role: "Senior Pastor, Upper Room Churches Worldwide",
    image: "/mama.webp",
    imageFocus: "50% 20%",
    facebookUrl: "https://web.facebook.com/estherpetermakanto",
    shortBio:
      "Senior Pastor of Upper Room Churches Worldwide — co-laboring in prayer, teaching, and compassionate kingdom service.",
    bio: [
      "Pastor Esther Makanto serves as Senior Pastor of Upper Room Churches Worldwide, standing alongside Bishop Peter Makanto in shepherding the flock across the Upper Room family of churches.",
      "Her ministry is marked by compassionate prayer, the teaching of God's Word, and a deep commitment to changing lives and building the Kingdom — offering excellent service to God and to mankind.",
      "Through her leadership, believers are encouraged, strengthened, and established in faith as Upper Room continues to be a blessing to the nations.",
    ],
    highlights: [
      "Senior Pastor, Upper Room Churches Worldwide",
      "Co-laborer in prayer and the Word",
      "Shepherding across Upper Room churches",
    ],
  },
];

/** Spiritual Guardians shown on the About page (third card repeats Bishop). */
export const spiritualGuardians = [
  leaders[0],
  leaders[1],
  leaders[0],
] as const;

export function getLeaderBySlug(slug: string): Leader | undefined {
  return leaders.find((leader) => leader.slug === slug);
}
