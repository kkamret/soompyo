"use client"
import { useState } from "react"
import BottomNav from "@/components/BottomNav"
import { Search, Sliders, Layers, Crosshair } from "lucide-react"
import { dummyPlaces } from "@/lib/dummy"
import NoiseBadge from "@/components/ui/NoiseBadge"
import WellnessScore from "@/components/ui/WellnessScore"
import Link from "next/link"

const PIN_POSITIONS = [
  { top: "28%", left: "30%" },
  { top: "45%", left: "55%" },
  { top: "62%", left: "38%" },
]

export default function MapPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = dummyPlaces.find((p) => p.id === selectedId)

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Floating search bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[430px]
                      px-4 pt-4 z-30 flex gap-2">
        <div className="flex-1 h-11 bg-white border border-gray-200 rounded-xl
                        flex items-center gap-2 px-3 shadow-sm">
          <Search size={15} className="text-gray-400 flex-shrink-0" />
          <input
            placeholder="장소 이름으로 검색"
            className="flex-1 text-sm outline-none bg-transparent text-gray-700
                       placeholder:text-gray-400"
          />
        </div>
        <button className="w-11 h-11 bg-white border border-gray-200 rounded-xl
                           flex items-center justify-center shadow-sm">
          <Sliders size={16} className="text-gray-600" />
        </button>
      </div>

      {/* Map placeholder — TODO: 용혁 Tableau 대시보드 완성 시 Tableau Embed API v3로 교체 */}
      <div className="flex-1 bg-[#E1F5EE] flex flex-col items-center justify-center gap-3 relative">
        <span className="text-5xl">🗺️</span>
        <p className="text-sm text-[#085041] font-medium">Tableau 소음 지도</p>
        <p className="text-xs text-[#0F6E56] opacity-60">임베딩 예정</p>

        {/* 더미 핀들 */}
        {dummyPlaces.map((p, i) => {
          const pos = PIN_POSITIONS[i]
          const color =
            p.noiseLevel < 45
              ? "bg-[#1D9E75]"
              : p.noiseLevel < 55
              ? "bg-[#BA7517]"
              : "bg-red-400"
          return (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id === selectedId ? null : p.id)}
              style={{ position: "absolute", top: pos.top, left: pos.left }}
              className={`w-9 h-9 rounded-full flex items-center justify-center text-white
                          text-xs font-bold shadow-lg transition-transform
                          ${color} ${p.id === selectedId ? "scale-125 ring-2 ring-white" : ""}`}
            >
              {p.noiseLevel}
            </button>
          )
        })}

        {/* FABs */}
        <div className="absolute right-4 bottom-6 flex flex-col gap-2">
          <button className="w-11 h-11 bg-[#7F77DD] rounded-full flex items-center justify-center shadow-lg">
            <Layers size={18} className="text-white" />
          </button>
          <button className="w-11 h-11 bg-white border border-gray-200 rounded-full
                             flex items-center justify-center shadow-md">
            <Crosshair size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Bottom sheet — 핀 클릭 시 */}
      {selected && (
        <div className="bg-white border-t border-gray-100 rounded-t-2xl px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="w-8 h-1 bg-gray-200 rounded-full mx-auto" />
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">{selected.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{selected.category} · {selected.distance}m</p>
              <div className="flex gap-1.5 mt-2 flex-wrap">
                <NoiseBadge dB={selected.noiseLevel} />
                <WellnessScore score={selected.wellnessScore} />
              </div>
            </div>
            <span
              className={`text-xs font-medium mt-1 ${
                selected.isOpen ? "text-[#1D9E75]" : "text-red-400"
              }`}
            >
              {selected.isOpen ? "영업중" : "영업종료"}
            </span>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 h-10 border border-gray-200 rounded-xl text-sm text-gray-700
                               active:bg-gray-50">
              길찾기
            </button>
            <Link
              href={`/place/${selected.id}`}
              className="flex-1 h-10 bg-[#7F77DD] rounded-xl text-white text-sm
                         flex items-center justify-center active:bg-[#534AB7]"
            >
              자세히 보기
            </Link>
          </div>
        </div>
      )}

      <div className="pb-16">
        <BottomNav />
      </div>
    </div>
  )
}
