import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-md">
          Sorry, the page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <Link href="/">
          <Button className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
