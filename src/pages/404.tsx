import Link from "next/link";

export default function Example() {
    return (
      <>
        <main className="grid min-h-dvh place-items-center bg-white px-6 py-36 sm:py-48 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-orange-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Kilroy isn't here ):</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Go back home
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }