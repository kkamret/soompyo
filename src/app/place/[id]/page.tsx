import { dummyPlaces, dummyBooks } from "@/lib/dummy"
import { notFound } from "next/navigation"
import TopBar from "@/components/TopBar"
import BottomNav from "@/components/BottomNav"
import NoiseBadge from "@/components/ui/NoiseBadge"
import WellnessScore from "@/components/ui/WellnessScore"
import Link from "next/link"
import { Navigation, Share2 } from "lucide-react"

export default function PlaceDetail({ params }: { params: { id: string } }) {
  // TODO: 용혁 Supabase 연동 시 fetch(`/api/places/${params.id}`)로 교체
  const place = dummyPlaces.find((p) => p.id === params.id)
  if (!place) notFound()

  const books = dummyBooks.filter((b) => place.bookIds.includes(b.id))

  const categoryEmoji =
    place.category === "공원" ? "🌳" : place.category === "독립서점" ? "📚" : "🏛️"

  const weatherBanner =
    place.category === "공원"
      ? {
          bg: "bg-[#FAEEDA]",
          border: "border-[#BA7517]",
          text: "text-[#633806]",
          msg: "맑고 쾌적한 날씨입니다. 야외 공원 방문에 최적이에요.",
        }
      : {
          bg: "bg-[#E1F5EE]",
          border: "border-[#1D9E75]",
          text: "text-[#085041]",
          msg: "오늘 날씨에 실내 공간 방문을 추천드려요.",
        }

  return (
    <div className="min-h-screen flex flex-col bg-white pb-24">
      <TopBar title="공간 상세" back="/map" />

      {/* 이미지 — TODO: place.images[0] 실제 이미지 URL로 교체 */}
      <div className="h-56 bg-[#E1F5EE] flex items-center justify-center relative">
        <span className="text-6xl">{categoryEmoji}</span>
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span className="text-xs bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full text-gray-600">
            {place.category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 flex gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-white" : "bg-white/40"}`} />
          ))}
        </div>
      </div>

      <div className="px-4 py-5 space-y-5">
        {/* 헤더 */}
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{place.name}</h1>
          <p className="text-sm text-gray-400 mt-0.5">{place.address}</p>
          <div className="flex gap-2 mt-2.5 flex-wrap">
            <NoiseBadge dB={place.noiseLevel} />
            <WellnessScore score={place.wellnessScore} />
            <span
              className={`text-xs font-medium ${
                place.isOpen ? "text-[#1D9E75]" : "text-red-400"
              }`}
            >
              {place.isOpen ? "영업중" : "영업종료"}
            </span>
          </div>
        </div>

        {/* 지표 4분할 카드 */}
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { label: "소음도",      value: `${place.noiseLevel} dB`,    sub: "매우 조용", color: "text-[#085041]" },
            { label: "쾌적도 지수", value: `${place.wellnessScore} 점`, sub: "상위 10%", color: "text-[#3C3489]" },
            { label: "녹지율",      value: `${place.greenRate} %`,       sub: "",          color: "text-[#3B6D11]" },
            { label: "유동인구",    value: place.crowd,                  sub: "",          color: "text-[#633806]" },
          ].map(({ label, value, sub, color }) => (
            <div key={label} className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-400">{label}</p>
              <p className={`text-base font-semibold mt-0.5 ${color}`}>{value}</p>
              {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
            </div>
          ))}
        </div>

        <div className="h-px bg-gray-100" />

        {/* 운영시간 · 주소 */}
        <div className="space-y-3">
          <div>
            <p className="text-xs text-gray-400">운영시간</p>
            <p className="text-sm text-gray-800 mt-0.5">{place.hours}</p>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-400">주소</p>
              <p className="text-sm text-gray-800 mt-0.5">{place.address}</p>
            </div>
            <button className="text-xs text-[#7F77DD] px-2 py-1 border border-[#EEEDFE]
                               rounded-lg flex-shrink-0 ml-2">
              복사
            </button>
          </div>
        </div>

        <div className="h-px bg-gray-100" />

        {/* 편의시설 */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-2">편의시설</p>
          <div className="flex gap-2 flex-wrap">
            {place.facilities.map((f) => (
              <span key={f} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* 날씨 배너 — TODO: 정연 날씨 로직 완성 시 동적으로 교체 */}
        <div className={`${weatherBanner.bg} border-l-4 ${weatherBanner.border} rounded-xl p-3`}>
          <p className={`text-xs font-medium ${weatherBanner.text}`}>오늘 날씨 방문 적합도</p>
          <p className={`text-xs mt-1 ${weatherBanner.text} opacity-80`}>{weatherBanner.msg}</p>
        </div>

        <div className="h-px bg-gray-100" />

        {/* 추천 도서 — TODO: 정연 도서 매칭 API로 교체 */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-3">이 공간에 어울리는 책</p>
          <div className="space-y-2.5">
            {books.map((book) => (
              <Link key={book.id} href={`/book/${book.id}`}>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50
                                active:bg-gray-100 transition-colors">
                  <div
                    className="w-10 h-14 rounded flex items-center justify-center
                                text-xs font-medium flex-shrink-0"
                    style={{ background: book.coverBg, color: book.coverText }}
                  >
                    표지
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{book.title}</p>
                    <p className="text-xs text-gray-400">{book.author}</p>
                    <div className="flex gap-1 mt-1.5 flex-wrap">
                      {book.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] text-[#3C3489] bg-[#EEEDFE] px-1.5 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
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
          <button className="flex-1 h-12 border border-gray-200 rounded-xl text-sm text-gray-700
                             flex items-center justify-center gap-2 active:bg-gray-50">
            <Navigation size={15} /> 길찾기
          </button>
          <button className="flex-1 h-12 border border-gray-200 rounded-xl text-sm text-gray-700
                             flex items-center justify-center gap-2 active:bg-gray-50">
            <Share2 size={15} /> 공유하기
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
