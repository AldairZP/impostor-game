import type { ClassValue } from "clsx";
import { cn } from "../untils/cn";

type Props = {
  className?: ClassValue;
  children: React.ReactNode;
};

export const Card = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "flex min-w-50 min-h-50 max-h-full bg-white rounded-2xl shadow-md w-full",
        className
      )}
    >
      {children}
    </div>
  );
};
