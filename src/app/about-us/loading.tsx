import { Skeleton } from "../components/ui/skeleton"

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="w-full md:w-1/2">
          <Skeleton className="h-[200px] w-full" />
        </div>
        
        <div className="relative w-full md:w-1/2">
          <div className="absolute top-4 left-4 w-full h-full bg-[#1e4d4d] z-0"></div>
          <Skeleton className="relative z-10 w-full aspect-[4/5]" />
        </div>
      </div>
    </div>
  )
}

