"use client"
import { useState } from "react"
import TopBar from "@/components/TopBar"
import BottomNav from "@/components/BottomNav"
import { Settings, ChevronRight, Bell, Moon, User, LogOut } from "lucide-react"

export default function MyPage() {
  const [push, setPush] = useState(true)
  const [dark, setDark] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-white pb-20">
      <TopBar
        title="마이페이지"
        right={<Settings size={20} className="text-gray-400" />}
      />

      <div className="flex-1 overflow-y-auto">
        {/* 프로필 */}
        <div className="px-4 py-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[#EEEDFE] flex items-center justify-center">
            <User size={24} className="text-[#7F77DD]" />
          </div>
          <div className="flex-1">
            <p className="text-base font-semibold text-gray-900">조용한독서가</p>
            <p className="text-sm text-gray-400 mt-0.5">책과 커피를 사랑합니다</p>
          </div>
          <button className="text-xs text-[#7F77DD] border border-[#EEEDFE]
                             bg-[#EEEDFE] px-3 py-1.5 rounded-lg">
            수정
          </button>
        </div>

        {/* 통계 */}
        <div className="mx-4 bg-gray-50 rounded-2xl p-4 flex justify-around">
          {[
            { val: "3",  label: "저장한 숨표" },
            { val: "12", label: "저장한 책" },
            { val: "7",  label: "방문한 곳" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <p className="text-lg font-semibold text-gray-900">{val}</p>
              <p className="text-xs text-gray-400 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        <div className="h-2.5 bg-gray-50 my-4" />

        {/* 나의 숨표 — v2 */}
        <div className="px-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-gray-900">나의 숨표</p>
            <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">
              v2 예정
            </span>
          </div>
          <div className="h-20 bg-gray-50 rounded-2xl flex items-center justify-center border border-dashed border-gray-200">
            <p className="text-sm text-gray-300">즐겨찾기 기능 준비중</p>
          </div>
        </div>

        <div className="h-2.5 bg-gray-50" />

        {/* 설정 */}
        <div className="px-4 py-4 space-y-0">
          <p className="text-xs text-gray-400 mb-3">설정</p>

          {/* 토글 */}
          {[
            { icon: Bell, label: "푸시 알림",  val: push, set: setPush },
            { icon: Moon, label: "다크 모드",  val: dark, set: setDark },
          ].map(({ icon: Icon, label, val, set }) => (
            <div key={label}
              className="flex items-center justify-between py-3.5 border-b border-gray-50">
              <div className="flex items-center gap-3">
                <Icon size={18} className="text-gray-400" />
                <span className="text-sm text-gray-800">{label}</span>
              </div>
              <button
                onClick={() => set((v: boolean) => !v)}
                className={`w-11 h-6 rounded-full transition-colors relative flex-shrink-0 ${
                  val ? "bg-[#7F77DD]" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                    val ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}

          {/* 링크 */}
          {["계정 관리", "공지사항", "버전 정보"].map((label) => (
            <div key={label}
              className="flex items-center justify-between py-3.5 border-b border-gray-50">
              <span className="text-sm text-gray-800">{label}</span>
              <ChevronRight size={16} className="text-gray-300" />
            </div>
          ))}

          <div className="flex items-center justify-between py-3.5">
            <span className="text-sm text-red-400">회원 탈퇴</span>
            <ChevronRight size={16} className="text-red-200" />
          </div>
        </div>

        {/* 로그아웃 */}
        <div className="px-4 pb-6">
          <button className="w-full h-11 border border-gray-200 rounded-xl text-sm text-gray-500
                             flex items-center justify-center gap-2 active:bg-gray-50">
            <LogOut size={15} />
            로그아웃
          </button>
          <p className="text-center text-xs text-gray-300 mt-4">숨표 v1.0.0</p>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
