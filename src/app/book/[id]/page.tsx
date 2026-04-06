import { dummyBooks, dummyPlaces } from "@/lib/dummy"
import { notFound } from "next/navigation"
import TopBar from "@/components/TopBar"
import BottomNav from "@/components/BottomNav"
import NoiseBadge from "@/components/ui/NoiseBadge"
import Link from "next/link"
import { Star, ExternalLink } from "lucide-react"

export default function BookDetail({ params }: { params: { id: string } }) {
  // TODO: 카카오 책 API 연동 시 fetch로 교체
  const book = dummyBooks.find((b) => b.id === params.id)
  if (!book) notFound()

  const relatedPlaces = dummyPlaces.filter((p) => book.placeIds.includes(p.id))

  return (
    <div className="min-h-screen flex flex-col bg-white pb-24">
      <TopBar title="도서 상세" back="/home" />

      <div className="px-4 py-6 space-y-5">
        {/* 도서 헤더 */}
        <div className="flex gap-4 items-start">
          <div
            className="w-20 h-28 rounded-lg flex items-center justify-center
                        text-xs font-medium flex-shrink-0 border border-gray-100 shadow-sm"
            style={{ background: book.coverBg, color: book.coverText }}
          >
            표지
          </div>
          <div className="flex-1 pt-1">
            <h1 className="text-xl font-semibold text-gray-900">{book.title}</h1>
            <p className="text-sm text-gray-500 mt-1">{book.author} 지음</p>
            <p className="text-xs text-gray-400 mt-0.5">
              {book.publisher} · {book.year}
            </p>
            <div className="flex gap-1.5 mt-3 flex-wrap">
              {book.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-[#EEEDFE] text-[#3C3489] px-2 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-100" />

        {/* 줄거리 */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-2">줄거리</p>
          <p className="text-sm text-gray-500 leading-relaxed">{book.description}</p>
        </div>

        <div className="h-px bg-gray-100" />

        {/* 날씨 기반 메시지 — TODO: 정연 날씨 로직 완성 시 동적으로 교체 */}
        <div className="bg-[#E1F5EE] border-l-4 border-[#1D9E75] rounded-xl p-3">
          <p className="text-xs font-medium text-[#085041]">이 책을 읽기 좋은 오늘</p>
          <p className="text-xs text-[#0F6E56] mt-1 opacity-80">{book.weatherMessage}</p>
        </div>

        <div className="h-px bg-gray-100" />

        {/* 어울리는 공간 — 역방향 링크 */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-2">이 책과 어울리는 공간</p>
          <div className="space-y-2">
            {relatedPlaces.map((place) => (
              <Link key={place.id} href={`/place/${place.id}`}>
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3
                                active:bg-gray-100 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-[#E1F5EE] flex items-center
                                  justify-center text-lg flex-shrink-0">
                    {place.category === "공원" ? "🌳" : place.category === "독립서점" ? "📚" : "🏛️"}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{place.name}</p>
                    <div className="flex gap-1.5 mt-0.5">
                      <NoiseBadge dB={place.noiseLevel} />
                    </div>
                  </div>
                  <span className="text-gray-300 text-lg">›</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-2 pt-1">
          <a
            href={book.purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-12 bg-[#FEE500] text-[#3C1E1E] rounded-xl text-sm font-medium
                       flex items-center justify-center gap-2 active:opacity-80"
          >
            <ExternalLink size={15} />
            카카오 도서 구매
          </a>
          <button className="w-12 h-12 border border-gray-200 rounded-xl
                             flex items-center justify-center active:bg-gray-50">
            <Star size={18} className="text-gray-400" />
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
