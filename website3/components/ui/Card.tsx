"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends Omit<HTMLMotionProps<"div">, "onDrag"> {
  children: React.ReactNode;
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
        className={cn(
          "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",
          hover && "hover:shadow-2xl hover:border-gray-200",
          "transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("px-6 py-4", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("px-6 pb-6", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  aspectRatio?: "square" | "video" | "auto";
}

const CardImage = forwardRef<HTMLDivElement, CardImageProps>(
  ({ className, src, alt, aspectRatio = "video", ...props }, ref) => {
    const aspectClasses = {
      square: "aspect-square",
      video: "aspect-video",
      auto: "",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-gray-100",
          aspectClasses[aspectRatio],
          className
        )}
        {...props}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>
    );
  }
);

CardImage.displayName = "CardImage";

export { Card, CardHeader, CardContent, CardImage };
