"use client"
import { useRouter } from "next/navigation"
import TopBar from "@/components/TopBar"

const methods = [
  {
    label: "이메일로 계속",
    icon: "✉️",
    style: "border border-gray-200 text-gray-800 bg-white",
  },
  {
    label: "Apple로 계속",
    icon: "🍎",
    style: "border border-gray-200 text-gray-800 bg-white",
  },
  {
    label: "Google로 계속",
    icon: "G",
    style: "border border-gray-200 text-gray-800 bg-white",
    iconStyle: "text-[#EA4335] font-bold",
  },
  {
    label: "카카오로 계속",
    icon: "K",
    style: "bg-[#FEE500] text-[#3C1E1E] border border-[#FEE500]",
  },
]

export default function SignUp() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar title="회원가입" back="/onboarding" />
      <div className="flex-1 flex flex-col px-5 pt-10 gap-4">
        <div className="mb-2">
          <h2 className="text-xl font-semibold text-gray-900">환영합니다!</h2>
          <p className="text-sm text-gray-500 mt-1">계정을 만들어 주세요</p>
        </div>

        {/* TODO: 실제 OAuth 연동 시 각 버튼에 supabase.auth.signInWithOAuth 추가 */}
        {methods.map(({ label, icon, style, iconStyle }) => (
          <button
            key={label}
            onClick={() => router.push("/home")}
            className={`w-full h-12 rounded-xl flex items-center justify-center gap-2.5
                        text-sm font-medium active:scale-[0.98] transition-transform ${style}`}
          >
            <span className={`text-base ${iconStyle ?? ""}`}>{icon}</span>
            {label}
          </button>
        ))}

        <div className="mt-4 text-center text-sm text-gray-400">
          이미 계정이 있으신가요?{" "}
          <button
            onClick={() => router.push("/auth/login")}
            className="text-[#7F77DD] font-medium"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  )
}
