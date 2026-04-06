"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Map, User } from "lucide-react"
import { clsx } from "clsx"

const tabs = [
  { href: "/home", label: "홈", Icon: Home },
  { href: "/map",  label: "맵", Icon: Map  },
  { href: "/my",   label: "MY", Icon: User },
]

export default function BottomNav() {
  const path = usePathname()
  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px]
                 h-16 bg-white border-t border-gray-100 flex items-stretch z-50"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {tabs.map(({ href, label, Icon }) => {
        const active = path.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            className={clsx(
              "flex-1 flex flex-col items-center justify-center gap-0.5 text-[10px] transition-colors",
              active ? "text-[#7F77DD]" : "text-gray-400"
            )}
          >
            <Icon size={20} strokeWidth={active ? 2.2 : 1.5} />
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
