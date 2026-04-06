import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Props {
  title?: string
  back?: string
  right?: React.ReactNode
}

export default function TopBar({ title, back, right }: Props) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100
                       h-12 flex items-center px-4 gap-3">
      {back && (
        <Link href={back} className="text-gray-500 -ml-1 p-1">
          <ArrowLeft size={20} />
        </Link>
      )}
      {title && (
        <h1 className="flex-1 text-[15px] font-medium text-gray-900">{title}</h1>
      )}
      {right && <div className="ml-auto">{right}</div>}
    </header>
  )
}
