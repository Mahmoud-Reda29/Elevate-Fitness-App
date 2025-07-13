export default function MealPlaceholder() {
  return (
    <div className="mx-auto max-w-2xl animate-pulse overflow-hidden rounded-2xl bg-gray-900 text-white shadow-2xl">
      {/* Hero Section Placeholder */}
      <div className="relative h-72 overflow-hidden bg-gray-800">
        <div className="absolute inset-0 bg-gray-700 opacity-30" />
        <div className="absolute right-0 bottom-0 left-0 p-8">
          <div className="mx-auto mb-4 h-8 w-3/4 rounded bg-gray-700" />
          <div className="mx-auto h-20 w-full max-w-lg rounded bg-gray-700" />
          <div className="my-4 flex justify-between gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex w-1/5 flex-col items-center rounded-2xl border border-white bg-gray-800 p-2"
              >
                <div className="mb-1 h-4 w-8 rounded bg-gray-700" />
                <div className="h-3 w-12 rounded bg-gray-600" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ingredients Placeholder */}
      <div className="relative p-4">
        <div className="mb-6 h-6 w-1/4 rounded bg-gray-700" />

        <div className="flex flex-wrap gap-y-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="w-full px-2 sm:w-1/2 md:w-5/12">
              <div className="flex items-center justify-between pb-1">
                <span className="h-4 w-24 rounded bg-gray-700" />
                <span className="h-4 w-12 rounded bg-gray-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
