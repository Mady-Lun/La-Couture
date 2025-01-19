import { Skeleton } from "../components/ui/skeleton"

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-[200px] mx-auto mb-2" />
        <Skeleton className="h-6 w-[300px] mx-auto" />
      </div>

      <div className="max-w-5xl mx-auto bg-[#1e4d4d] p-8 md:p-12 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-12 w-full bg-gray-700" />
            ))}
          </div>
          <div className="space-y-4">
            <Skeleton className="h-8 w-48 bg-gray-700" />
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-12 w-full bg-gray-700" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

