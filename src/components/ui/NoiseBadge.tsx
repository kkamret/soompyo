import { getNoiseColor } from "@/lib/dummy"
import { clsx } from "clsx"

export default function NoiseBadge({ dB }: { dB: number }) {
  const { bg, text, label } = getNoiseColor(dB)
  return (
    <span className={clsx("text-xs font-medium px-2 py-0.5 rounded-full", bg, text)}>
      {dB}dB · {label}
    </span>
  )
}
