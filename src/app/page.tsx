"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Splash() {
  const router = useRouter()

  useEffect(() => {
    // TODO: Supabase 세션 체크 후 /home 또는 /onboarding으로 분기
    const t = setTimeout(() => router.replace("/onboarding"), 2000)
    return () => clearTimeout(t)
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white">
      <div className="w-20 h-20 rounded-2xl bg-[#EEEDFE] flex items-center justify-center shadow-sm">
        <span
          className="text-3xl font-light text-[#7F77DD]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          숨
        </span>
      </div>
      <div className="text-center">
        <p className="text-2xl font-semibold text-gray-900">숨표</p>
        <p className="text-sm text-gray-400 mt-1">도심 속 고요한 쉼표</p>
      </div>
      <div className="w-6 h-6 border-2 border-gray-200 border-t-[#7F77DD] rounded-full animate-spin" />
    </div>
  )
}
