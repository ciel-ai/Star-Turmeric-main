import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="404 — Page Not Found | Star Turmerics" noIndex />
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <p className="font-display text-7xl font-bold text-foreground">404</p>
          <h1 className="mt-4 text-xl font-semibold text-foreground">Page not found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
