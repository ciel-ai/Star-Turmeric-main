import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function SEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  canonical,
  noIndex,
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    if (description) setMeta("description", description);
    if (noIndex) setMeta("robots", "noindex");
    if (ogTitle ?? title) setMeta("og:title", ogTitle ?? title, "property");
    if (ogDescription ?? description)
      setMeta("og:description", (ogDescription ?? description)!, "property");
    if (ogImage) setMeta("og:image", ogImage, "property");
    if (canonical) setCanonical(canonical);
  }, [title, description, ogTitle, ogDescription, ogImage, canonical, noIndex]);

  return null;
}
