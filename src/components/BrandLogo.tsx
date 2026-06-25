import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/yas_analyst_logo.png"
      alt="YAS Analyst"
      width={320}
      height={320}
      className={className}
      priority={priority}
    />
  );
}
