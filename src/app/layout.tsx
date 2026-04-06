import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "숨표 — 도심 속 고요한 쉼표",
  description: "데이터로 찾는 도심 속 완벽한 사색 공간 큐레이션 맵",
}

export const viewport: Viewport = {
  themeColor: "#7F77DD",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-100 flex justify-center min-h-screen`}>
        <div className="w-full max-w-[430px] min-h-screen bg-white relative overflow-x-hidden shadow-sm">
          {children}
        </div>
      </body>
    </html>
  )
}
