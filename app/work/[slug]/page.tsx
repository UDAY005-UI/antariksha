import { notFound } from "next/navigation"
import { brands, getBrandBySlug, getAllSlugs } from "../data/brand"
import BrandPageClient from "./BrandPageClient"

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand = getBrandBySlug(slug)

  if (!brand) notFound()

  return <BrandPageClient brand={brand} />
}