import React from "react";
import { Download, BookOpen } from "lucide-react";

interface EbookDownloadProps {
  downloadLink: string;
  serviceTitle: string;
}

export function EbookDownload({
  downloadLink,
  serviceTitle,
}: EbookDownloadProps) {
  return (
    <div className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-500/10 dark:to-blue-500/10 border border-cyan-300 dark:border-cyan-500/30 rounded-xl p-6 mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <BookOpen className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
        <h3 className="text-xl font-semibold text-slate-800 dark:text-white font-nunito">
          Your E-book is Ready!
        </h3>
      </div>

      <p className="text-slate-700 dark:text-gray-300 text-center mb-5 font-nunito">
        Download your complimentary e-book for{" "}
        <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
          {serviceTitle}
        </span>
      </p>

      <a
        href={downloadLink}
        download
        className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 font-nunito group"
      >
        <Download className="h-5 w-5 group-hover:animate-bounce" />
        Download Your E-book Now
      </a>

      <p className="text-slate-600 dark:text-gray-400 text-sm text-center mt-3 font-nunito">
        A download link has also been sent to your email
      </p>
    </div>
  );
}
