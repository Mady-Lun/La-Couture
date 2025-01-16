import { Skeleton } from "../components/ui/skeleton"

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <Skeleton className="h-12 w-[300px] mx-auto mb-16" />
      
      <div className="space-y-16">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8">
            <Skeleton className="w-full md:w-1/2 aspect-[4/5]" />
            <div className="w-full md:w-1/2 space-y-4">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-40 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

