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
        type: "BRAND REEL — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785684432/TWH_-_II_h5h4vi.mp4",
        description:
          "A rapid-cut brand reel for The Waffle House — a dessert spot serving freshly made waffles with bold toppings and honest flavour. Quick edits, warm textures, and an appetite for the unapologetically indulgent.",
      },
      {
        id: 5,
        title: "THE WAFFLE HOUSE",
        type: "BRAND REEL — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785684506/Waffle_house_abstract_ejs5tt.mp4",
        description:
          "A rapid-cut brand reel for The Waffle House — a dessert spot serving freshly made waffles with bold toppings and honest flavour. Quick edits, warm textures, and an appetite for the unapologetically indulgent.",
      },
      {
        id: 6,
        title: "THE WAFFLE HOUSE",
        type: "BRAND REEL — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785684513/Areyy_Modijiiii_wo_TEXT_sgjgrv.mp4",
        description:
          "A rapid-cut brand reel for The Waffle House — a dessert spot serving freshly made waffles with bold toppings and honest flavour. Quick edits, warm textures, and an appetite for the unapologetically indulgent.",
      },
      {
        id: 7,
        title: "THE WAFFLE HOUSE",
        type: "BRAND REEL — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785684726/TWH_-_I_x3st9h.mp4",
        description:
          "A rapid-cut brand reel for The Waffle House — a dessert spot serving freshly made waffles with bold toppings and honest flavour. Quick edits, warm textures, and an appetite for the unapologetically indulgent.",
      },
      {
        id: 8,
        title: "THE WAFFLE HOUSE",
        type: "BRAND REEL — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785684752/waffle_house_2_nlflqs.mp4",
        description:
          "A rapid-cut brand reel for The Waffle House — a dessert spot serving freshly made waffles with bold toppings and honest flavour. Quick edits, warm textures, and an appetite for the unapologetically indulgent.",
      },
      {
        id: 9,
        title: "THE WAFFLE HOUSE",
        type: "BRAND REEL — 2026",
        video:
          "https://res.cloudinary.com/dthpzuhja/video/upload/v1785684878/WAFFLE_NE_DIL_CHURA_LIYA-1_uc1adq.mp4",
        description:
          "A rapid-cut brand reel for The Waffle House — a dessert spot serving freshly made waffles with bold toppings and honest flavour. Quick edits, warm textures, and an appetite for the unapologetically indulgent.",
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
        type: "BRAND REEL — 2026",
        video: "https://res.cloudinary.com/dthpzuhja/video/upload/v1785677560/CCCO_walking_Reels_btpqwi.mp4",
        description:
          "A rapid-cut brand reel for CCCO — built to capture the brand's identity through fast edits, warm tones, and close-up textures that sell the feeling before the product.",
      },
      {
        id: 8,
        title: "CCCO",
        type: "BRAND REEL — 2026",
        video: "https://res.cloudinary.com/dthpzuhja/video/upload/v1785685218/FRIENDSHIP_DAY_Casual_-_CCCO_2_ricfvx.mp4",
        description:
          "A rapid-cut brand reel for CCCO — built to capture the brand's identity through fast edits, warm tones, and close-up textures that sell the feeling before the product.",
      },
      {
        id: 9,
        title: "CCCO",
        type: "BRAND REEL — 2026",
        video: "https://res.cloudinary.com/dthpzuhja/video/upload/v1785685283/FRIENDSHIP_DAY_Cinematic_-_CCCO_1_putjtz.mp4",
        description:
          "A rapid-cut brand reel for CCCO — built to capture the brand's identity through fast edits, warm tones, and close-up textures that sell the feeling before the product.",
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
        type: "BRAND REEL — 2026",
        video: "https://res.cloudinary.com/dthpzuhja/video/upload/v1785678174/DUMPLICIOUSSS_FINAL_VIDEO_kslsyb.mp4",
        description:
          "A rapid-cut brand reel for Dumpliciousss — a dumpling spot serving up bold, handcrafted flavours. Quick edits, steam-filled close-ups, and an appetite for the unapologetically indulgent.",
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
        type: "BRAND REEL — 2026",
        video: "https://res.cloudinary.com/dthpzuhja/video/upload/v1785677979/MURLI_S_FINAL_l1cad6.mp4",
        description:
          "A rapid-cut brand reel for Murlis — built on fast edits, warm tones, and close-up textures designed to sell the feeling before the product.",
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
        type: "BRAND REEL — 2026",
        video: "https://res.cloudinary.com/dthpzuhja/video/upload/v1785677955/COFFEE_DATE_gdyzza.mp4",
        description:
          "A rapid-cut brand reel for Old Yard Cafe — a cozy neighbourhood cafe serving honest food and quiet moments. Slow-building visuals paired with warm, inviting tones built to sell the atmosphere.",
      },
      {
        id: 11,
        title: "OLD YARD CAFE",
        type: "BRAND REEL — 2026",
        video: "https://res.cloudinary.com/dthpzuhja/video/upload/v1785677754/OLD_YARD_CAFE_-_CINE_opszet.mp4",
        description:
          "A rapid-cut brand reel for Old Yard Cafe — a cozy neighbourhood cafe serving honest food and quiet moments. Slow-building visuals paired with warm, inviting tones built to sell the atmosphere.",
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
        type: "BRAND REEL — 2026",
        video: "https://res.cloudinary.com/dthpzuhja/video/upload/v1785680483/LIVING_ROOM_COMPANY_1_iztv0c.mp4",
        description:
          "A rapid-cut brand reel for The Living Room — built on fast edits, warm tones, and close-up textures designed to sell the feeling before the product.",
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