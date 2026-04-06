"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import TopBar from "@/components/TopBar"
import { Eye, EyeOff } from "lucide-react"

export default function Login() {
  const [showPw, setShowPw] = useState(false)
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar title="로그인" back="/auth/signup" />
      <div className="flex-1 flex flex-col px-5 pt-8 gap-5">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">다시 만나서 반가워요</h2>
          <p className="text-sm text-gray-400 mt-1">이메일로 계속할게요</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-500 mb-1.5 block">이메일</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full h-12 border border-gray-200 rounded-xl px-4 text-sm outline-none
                         focus:border-[#7F77DD] transition-colors"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1.5 block">비밀번호</label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                placeholder="비밀번호를 입력해 주세요"
                className="w-full h-12 border border-gray-200 rounded-xl px-4 pr-12 text-sm
                           outline-none focus:border-[#7F77DD] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 p-1"
              >
                {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="text-right mt-1.5">
              <button className="text-xs text-[#7F77DD]">비밀번호를 잊으셨나요?</button>
            </div>
          </div>
        </div>

        {/* TODO: Supabase Auth 연동 — supabase.auth.signInWithPassword */}
        <button
          onClick={() => router.push("/home")}
          className="w-full h-12 bg-[#7F77DD] text-white rounded-xl text-sm font-medium
                     active:scale-[0.98] transition-transform"
        >
          로그인
        </button>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-xs text-gray-400">또는</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <button
          onClick={() => router.push("/home")}
          className="w-full h-12 border border-gray-200 rounded-xl flex items-center
                     justify-center gap-2 text-sm text-gray-800"
        >
          <span className="text-[#EA4335] font-bold text-base">G</span>
          Google로 계속
        </button>

        <p className="text-center text-sm text-gray-400">
          계정이 없으신가요?{" "}
          <button
            onClick={() => router.push("/auth/signup")}
            className="text-[#7F77DD] font-medium"
          >
            가입하기
          </button>
        </p>
      </div>
    </div>
  )
}
