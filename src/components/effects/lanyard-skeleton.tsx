export default function LanyardSkeletonSwing() {
  return (
    <div className="flex h-full w-full items-start justify-center">
      {/* Thêm class animate-[swing_3s_ease-in-out_infinite] */}
      <div className="relative h-11/20 md:h-3/4 aspect-9/17 md:left-1/4 origin-top animate-swing">
        {/* Strap */}
        <div className="absolute left-1/2 top-0 h-1/4 w-8 -translate-x-1/2 rounded-lg bg-shadow animate-pulse" />
        {/* Card */}
        <div className="absolute bottom-0 h-3/4 w-full rounded-xl bg-shadow animate-pulse" />
      </div>
    </div>
  )
}
