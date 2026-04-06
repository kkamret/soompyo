export default function WellnessScore({ score }: { score: number }) {
  return (
    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#EEEDFE] text-[#3C3489]">
      쾌적도 {score}점
    </span>
  )
}
