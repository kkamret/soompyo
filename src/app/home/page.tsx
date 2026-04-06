import Link from "next/link"
import BottomNav from "@/components/BottomNav"
import NoiseBadge from "@/components/ui/NoiseBadge"
import WellnessScore from "@/components/ui/WellnessScore"
import { dummyWeather, dummyPlaces, dummyBooks } from "@/lib/dummy"
import { Bell, User, RefreshCw, MapPin, Navigation, Map } from "lucide-react"

export default function Home() {
  // TODO: 정연 API 완성 시 아래 변수들을 fetch 결과로 교체
  const place = dummyPlaces[0]
  const book = dummyBooks[0]
  const w = dummyWeather

  return (
    <div className="min-h-screen flex flex-col bg-white pb-20">
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm px-5 h-14
                         flex items-center justify-between border-b border-gray-100">
        <span className="text-lg font-semibold text-[#7F77DD]">숨표</span>
        <div className="flex items-center gap-3">
          <button className="text-gray-400 p-1">
            <Bell size={20} />
          </button>
          <div className="w-8 h-8 rounded-full bg-[#EEEDFE] flex items-center justify-center">
            <User size={16} className="text-[#7F77DD]" />
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 pt-4 flex flex-col gap-4">
        {/* Context Banner — TODO: OpenWeatherMap API로 교체 */}
        <div className="bg-[#E1F5EE] rounded-2xl px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-lg">☀️</span>
            <span className="text-sm font-medium text-[#085041]">
              {w.condition} · 오후 2시
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm text-[#085041]">
            <MapPin size={13} />
            {w.location}
          </div>
        </div>

        {/* Main Curation Card */}
        {/* TODO: dummyPlaces → 실시간 추천 API 응답으로 교체 */}
        <Link href={`/place/${place.id}`}>
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm
                          active:scale-[0.99] transition-transform">
            {/* 이미지 영역 — TODO: place.images[0] 실제 이미지 URL로 교체 */}
            <div className="h-52 bg-[#E1F5EE] flex items-center justify-center relative">
              <span className="text-6xl">🌳</span>
              <div className="absolute top-3 left-3 flex gap-1.5">
                <WellnessScore score={place.wellnessScore} />
                <span className="text-xs bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full text-gray-600">
                  {place.category}
                </span>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <div>
                <h2 className="text-base font-semibold text-gray-900">{place.name}</h2>
                <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                  <NoiseBadge dB={place.noiseLevel} />
                  <span className="text-xs text-gray-400">{place.distance}m</span>
                  <span
                    className={`text-xs font-medium ${
                      place.isOpen ? "text-[#1D9E75]" : "text-red-400"
                    }`}
                  >
                    {place.isOpen ? "영업중" : "영업종료"}
                  </span>
                </div>
              </div>

              {/* 편의시설 */}
              <div className="flex gap-1.5 flex-wrap">
                {place.facilities.map((f) => (
                  <span
                    key={f}
                    className="text-xs bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div className="h-px bg-gray-100" />

              {/* 추천 도서 — TODO: 정연 도서 매칭 API로 교체 */}
              <div>
                <p className="text-xs text-gray-400 mb-2">이 공간에 어울리는 책</p>
                <Link href={`/book/${book.id}`} onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-50
                                  active:bg-gray-100 transition-colors">
                    <div
                      className="w-9 h-12 rounded flex items-center justify-center text-xs font-medium flex-shrink-0"
                      style={{ background: book.coverBg, color: book.coverText }}
                    >
                      표지
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{book.title}</p>
                      <p className="text-xs text-gray-400">{book.author}</p>
                      <div className="flex gap-1 mt-1">
                        {book.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] text-[#3C3489] bg-[#EEEDFE] px-1.5 py-0.5 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex gap-2 pt-1">
                <button className="flex-1 h-10 rounded-xl border border-gray-200 text-sm text-gray-700
                                   flex items-center justify-center gap-1.5 active:bg-gray-50">
                  <Navigation size={14} />
                  길찾기
                </button>
                <Link
                  href="/map"
                  className="flex-1 h-10 rounded-xl bg-[#7F77DD] text-white text-sm
                             flex items-center justify-center gap-1.5 active:bg-[#534AB7]"
                >
                  <Map size={14} />
                  지도 보기
                </Link>
              </div>
            </div>
          </div>
        </Link>

        {/* Refresh */}
        <button className="w-full h-12 border border-gray-200 rounded-xl text-sm text-gray-600
                           flex items-center justify-center gap-2 active:bg-gray-50 transition-colors">
          <RefreshCw size={15} />
          다른 공간 추천받기
        </button>
      </main>

      <BottomNav />
    </div>
  )
}
