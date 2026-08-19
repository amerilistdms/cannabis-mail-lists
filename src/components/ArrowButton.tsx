import Image from "next/image";
import Link from "next/link";

type ArrowButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "outline-dark" | "outline-white";
  accent?: "blue" | "green" | "frost";
  className?: string;
};

export function ArrowButton({
  href,
  children,
  variant = "outline-dark",
  accent = "blue",
  className = "",
}: ArrowButtonProps) {
  const variants = {
    light: "border border-line bg-white text-foreground",
    "outline-dark": "border border-foreground bg-transparent text-foreground",
    "outline-white": "border border-frost bg-transparent text-frost",
  };

  const accents = {
    blue: "bg-blue",
    green: "bg-green",
    frost: "bg-frost",
  };

  const arrowSrc =
    accent === "frost" ? "/images/figma/arrow-dark.svg" : "/images/figma/arrow.svg";

  return (
    <Link
      href={href}
      className={`group inline-flex w-fit max-w-full items-center gap-2.5 rounded-full py-[5px] pl-4 pr-[5px] text-sm tracking-[0.14px] transition-opacity hover:opacity-90 sm:pl-5 ${variants[variant]} ${className}`}
    >
      <span className="min-w-0">{children}</span>
      <span
        className={`grid size-10 place-items-center rounded-full ${accents[accent]}`}
        aria-hidden
      >
        <Image
          src={arrowSrc}
          alt=""
          width={14}
          height={14}
          className="size-3.5 transition-transform duration-300 ease-out group-hover:rotate-45"
        />
      </span>
    </Link>
  );
}
