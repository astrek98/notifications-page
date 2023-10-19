export function NotificationImage({ src, alt }: { src?: string; alt: string }) {
  if (src == null || src === '') {
    return null;
  }

  return (
    <img src={src} alt={alt} width={40} height={40} className="w-10 h-10" />
  );
}
