import { Skeleton } from "../components/ui/skeleton"

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="space-y-8 text-center">
        <Skeleton className="h-12 w-[300px] mx-auto" />
        <Skeleton className="h-20 w-[600px] mx-auto" />
      </div>
      
      <Skeleton className="aspect-[3/2] max-w-2xl mx-auto my-16" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="aspect-[3/4] w-full" />
        ))}
      </div>
    </div>
  )
}

