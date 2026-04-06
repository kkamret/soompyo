"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { clsx } from "clsx"

const slides = [
  {
    emoji: "✨",
    bg: "bg-[#EEEDFE]",
    title: "지금 이 순간에 어울리는 공간",
    desc: "날씨, 시간, 위치를 고려해 AI가 가장 조용한 숨표를 추천해요",
  },
  {
    emoji: "🗺️",
    bg: "bg-[#E1F5EE]",
    title: "소음 지도로 한눈에",
    desc: "서울 구역별 소음도·녹지율·유동인구를 지도에서 직접 확인하세요",
  },
  {
    emoji: "📚",
    bg: "bg-[#FAEEDA]",
    title: "공간에 어울리는 책까지",
    desc: "그 장소의 분위기에 딱 맞는 도서를 함께 추천해 드려요",
  },
]

export default function Onboarding() {
  const [idx, setIdx] = useState(0)
  const router = useRouter()
  const isLast = idx === slides.length - 1

  const handleNext = () => {
    if (isLast) router.replace("/auth/signup")
    else setIdx((i) => i + 1)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 pt-14 pb-2">
        <span className="text-xs text-gray-400">{idx + 1} / {slides.length}</span>
        <button
          onClick={() => router.replace("/auth/signup")}
          className="text-sm text-gray-400"
        >
          건너뛰기
        </button>
      </div>

      {/* Illustration */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full flex flex-col items-center gap-10">
          <div
            className={clsx(
              "w-44 h-44 rounded-3xl flex items-center justify-center transition-all duration-300",
              slides[idx].bg
            )}
          >
            <span className="text-7xl">{slides[idx].emoji}</span>
          </div>
          <div className="text-center space-y-3">
            <h2 className="text-xl font-semibold text-gray-900 leading-snug">
              {slides[idx].title}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              {slides[idx].desc}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="px-5 pb-14 flex items-center justify-between">
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <div
              key={i}
              className={clsx(
                "h-1.5 rounded-full transition-all duration-300",
                i === idx ? "w-5 bg-[#7F77DD]" : "w-1.5 bg-gray-200"
              )}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="px-7 py-2.5 bg-[#7F77DD] text-white text-sm font-medium rounded-full
                     active:scale-95 transition-transform"
        >
          {isLast ? "시작하기" : "다음"}
        </button>
      </div>
    </div>
  )
}
