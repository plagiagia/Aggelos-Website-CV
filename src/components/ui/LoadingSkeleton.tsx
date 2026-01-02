export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-card rounded w-3/4" />
      <div className="h-4 bg-card rounded w-1/2" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-[3/4] md:aspect-[4/5] bg-card rounded" />
            <div className="h-6 bg-card rounded w-3/4" />
            <div className="h-4 bg-card rounded w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
