import { useState, type ImgHTMLAttributes } from "react";
import { safeUrl } from "../lib/media";
// A provider can lack a high-resolution thumbnail; retain its original standard cover.
export function Artwork({
  src,
  fallbackSrc,
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  fallbackSrc?: string;
}) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  return (
    <img
      {...props}
      src={safeUrl(failedSource === src && fallbackSrc ? fallbackSrc : src)}
      onError={
        fallbackSrc && failedSource !== src
          ? () => setFailedSource(src)
          : undefined
      }
    />
  );
}
