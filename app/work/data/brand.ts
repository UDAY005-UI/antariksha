export type WorkItem = {
  id: number
  title: string
  type: string
  video: string
  description: string
}

export type Brand = {
  id: number
  slug: string
  name: string
  coverImage: string
  works: WorkItem[]
}

export const brands: Brand[] = [
  {
    id: 1,
    slug: "cozy-crumbs",
    name: "COZY CRUMBS",
    coverImage: "https://res.cloudinary.com/dthpzuhja/image/upload/v1785682370/f4273f52-74dc-4f6b-92cc-b93b6eb68659.png",
    works: [
      {
        id: 1,
        title: "COZY CRUMBS",
        type: "BRAND REEL — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1778489915/cozy1_dohodp.mp4",
        description:
          "A rapid-cut brand reel for Cozy Crumbs — a homegrown cake and dessert studio based out of Lake Market, Kolkata. Fast edits locked to rhythm, warm tones, close-up textures. Built to sell the feeling before the product.",
      },
      {
        id: 2,
        title: "COZY CRUMBS",
        type: "VOICEOVER REEL — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1778489944/cozy2_avnonw.mp4",
        description:
          "A voiceover-led brand film for Cozy Crumbs — a homegrown cake and dessert studio based out of Lake Market, Kolkata. Slow, deliberate cuts paired with a narrative voice. Built to tell the story behind every bake.",
      },
    ],
  },
  {
    id: 2,
    slug: "the-waffle-house",
    name: "THE WAFFLE HOUSE",
    coverImage: "https://res.cloudinary.com/dthpzuhja/image/upload/v1785681534/b04202d9-0501-4719-854b-f67b97904c27.png",
    works: [
      {
        id: 3,
        title: "THE WAFFLE HOUSE",
        type: "BRAND REEL — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1778489906/waffle_hu9qkh.mp4",
        description:
          "A rapid-cut brand reel for The Waffle House — a dessert spot serving freshly made waffles with bold toppings and honest flavour. Quick edits, warm textures, and an appetite for the unapologetically indulgent.",
      },
      {
        id: 4,
        title: "THE WAFFLE HOUSE",
        type: "CINEMATIC REEL — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785684432/TWH_-_II_h5h4vi.mp4",
        description:
          "A slow-paced cinematic reel for The Waffle House, capturing the comfort of shared moments over freshly crafted waffles. Warm ambience, smooth transitions, and an unhurried rhythm that turns a simple craving into an experience. Waffle khane chale?",
      },
      {
        id: 5,
        title: "THE WAFFLE HOUSE",
        type: "PRODUCT FILM — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785684506/Waffle_house_abstract_ejs5tt.mp4",
        description:
          "A cinematic brand reel for The Waffle House — following a single sip that changes everything. As she melts into the richness of a handcrafted shake, the world around her transforms, leaving only the moment, the flavour, and the feeling. Smooth transitions, dreamy visuals, and an indulgence worth getting lost in.",
      },
      {
        id: 6,
        title: "THE WAFFLE HOUSE",
        type: "CREATIVE FILM — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785684513/Areyy_Modijiiii_wo_TEXT_sgjgrv.mp4",
        description:
          "A creative brand film for The Waffle House, crafted through seamless masking, background replacement, and cinematic color grading. A familiar public address is reimagined into a playful thank-you message, creating a memorable brand moment with polished visual storytelling.",
      },
      {
        id: 7,
        title: "THE WAFFLE HOUSE",
        type: "INTERACTIVE REEL — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785684752/waffle_house_2_nlflqs.mp4",
        description:
          "An interactive brand reel for The Waffle House, using freeze-frame editing, cursor interactions, and animated product callouts to highlight signature waffles. Seamless motion graphics and playful UI-inspired elements turn a simple menu showcase into an engaging visual experience.",
      },
      {
        id: 8,
        title: "THE WAFFLE HOUSE",
        type: "CINEMATIC STORY REEL — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785684878/WAFFLE_NE_DIL_CHURA_LIYA-1_uc1adq.mp4",
        description:
          "A cinematic story reel for The Waffle House, built around a playful narrative where everything can be taken away—except the waffles. Through expressive performances, cinematic framing, and seamless editing, the film transforms a light-hearted moment into a memorable story about a craving that's simply too good to let go.",
      },
    ],
  },
  {
    id: 3,
    slug: "tandoor-house",
    name: "TANDOOR HOUSE",
    coverImage: "https://res.cloudinary.com/dthpzuhja/image/upload/v1785683739/580fa2ca-d8fc-4b96-a57a-c5ee228246b2.png",
    works: [
      {
        id: 4,
        title: "TANDOOR HOUSE",
        type: "VOICEOVER REEL — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1778489939/tandoor_wpqqvu.mp4",
        description:
          "A voiceover-led brand film for Tandoor House — a Kolkata institution at Lake Market, Kalighat. Smoky, loud, and unapologetically real.",
      },
    ],
  },
  {
    id: 6,
    slug: "ccco",
    name: "CCCO",
    coverImage: "https://res.cloudinary.com/dthpzuhja/image/upload/v1785682021/718d6560-2304-4930-a643-13eabadaafcc.png",
    works: [
      {
        id: 7,
        title: "CCCO",
        type: "CINEMATIC BRAND REEL — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785677560/CCCO_walking_Reels_btpqwi.mp4",
        description:
          "A cinematic brand reel for CCCO, crafted with selective focus, subtle background separation, and music-driven pacing to draw attention to both the model and the brand. Smooth camera movement, intentional framing, and polished edits create a premium visual experience that feels effortless yet refined.",
      },
      {
        id: 8,
        title: "CCCO",
        type: "COMEDY STORY REEL — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785685218/FRIENDSHIP_DAY_Casual_-_CCCO_2_ricfvx.mp4",
        description:
          "A story-driven comedy reel for CCCO, celebrating Friendship Day through the all-too-familiar 'tu iss baar karde, main next time' bill-paying dilemma. Playful performances, cinematic visuals, and music-driven editing transform a relatable café moment into a light-hearted brand story with personality and charm.",
      },
      {
        id: 9,
        title: "CCCO",
        type: "CINEMATIC BRAND FILM — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785685283/FRIENDSHIP_DAY_Cinematic_-_CCCO_1_putjtz.mp4",
        description:
          "A cinematic brand film for CCCO, celebrating Friendship Day through quiet moments, genuine companionship, and a warm café atmosphere. Soft visuals, calm music, and intentional pacing create a heartfelt story that captures the joy of sharing meaningful moments over good food.",
      },
    ],
  },
  {
    id: 7,
    slug: "dumpliciousss",
    name: "DUMPLICIOUSSS",
    coverImage: "https://res.cloudinary.com/dthpzuhja/image/upload/v1785683664/9c53c0b4-3e7a-4f94-be0d-df669be68470.png",
    works: [
      {
        id: 8,
        title: "DUMPLICIOUSSS",
        type: "CINEMATIC BRAND FILM — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785678174/DUMPLICIOUSSS_FINAL_VIDEO_kslsyb.mp4",
        description:
          "A cinematic brand film for Dumpliciousss, inspired by Japanese aesthetics and crafted with warm visuals, intentional pacing, and immersive sound design. Gentle voice-over narration, atmospheric cinematography, and refined editing come together to create a calm, inviting story that celebrates the art of handcrafted dumplings.",
      },
    ],
  },
  {
    id: 8,
    slug: "murlis",
    name: "MURLIS",
    coverImage: "https://res.cloudinary.com/dthpzuhja/image/upload/v1785682611/ede1e650-0d41-4418-837c-0ea209105dc8.png",
    works: [
      {
        id: 9,
        title: "MURLIS",
        type: "CINEMATIC BRAND FILM — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785677979/MURLI_S_FINAL_l1cad6.mp4",
        description:
          "A cinematic brand film for Murlis, celebrating the warmth of South Indian cuisine through thoughtfully composed visuals, regional-inspired music, and subtle voice-over storytelling. Cinematic shots, rhythmic editing, and authentic café moments come together to create an inviting experience centered around timeless favourites like dosa, idli, and filter coffee.",
      },
    ],
  },
  {
    id: 9,
    slug: "old-yard-cafe",
    name: "OLD YARD CAFE",
    coverImage: "https://res.cloudinary.com/dthpzuhja/image/upload/v1785683025/72020f40-2d02-4d35-9ebc-2b6185433062.png",
    works: [
      {
        id: 10,
        title: "OLD YARD CAFE",
        type: "CINEMATIC BRAND FILM — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785677955/COFFEE_DATE_gdyzza.mp4",
        description:
          "A cinematic brand film for Old Yard Cafe, inviting viewers with a simple question—'Coffee date pe chale?'. Music-driven transitions, warm café aesthetics, and thoughtfully composed visuals create a relaxed, romantic atmosphere that captures the charm of sharing coffee and conversation.",
      },
      {
        id: 11,
        title: "OLD YARD CAFE",
        type: "CINEMATIC BRAND FILM — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785677754/OLD_YARD_CAFE_-_CINE_opszet.mp4",
        description:
          "A cinematic brand film for Old Yard Cafe, blending warm visuals, subtle voice-over narration, and thoughtfully composed shots to capture the café's inviting atmosphere. Soft pacing, refined cinematography, and immersive storytelling transform everyday moments into a calm and memorable coffee experience.",
      },
    ],
  },
  {
    id: 13,
    slug: "the-living-room",
    name: "THE LIVING ROOM",
    coverImage: "https://res.cloudinary.com/dthpzuhja/image/upload/v1785683294/a58f4bc0-28ac-4424-b8a2-a9db99990115.png",
    works: [
      {
        id: 14,
        title: "THE LIVING ROOM",
        type: "FOUNDER STORY FILM — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785680483/LIVING_ROOM_COMPANY_1_iztv0c.mp4",
        description:
          "A founder story film for The Living Room, where the owner's voice guides viewers through the journey of building the café from the ground up. Supported by cinematic visuals, atmospheric b-roll, and refined editing, the film captures the vision, dedication, and personality behind the brand.",
      },
    ],
  },
]

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug)
}

export function getAllSlugs(): string[] {
  return brands.map((b) => b.slug)
}