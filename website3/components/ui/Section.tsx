"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "default" | "dark" | "light" | "gradient";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, id, className, background = "default", ...props }, ref) => {
    const backgrounds = {
      default: "bg-white",
      dark: "bg-gray-900 text-white",
      light: "bg-gray-50",
      gradient: "bg-gradient-to-b from-gray-50 to-white",
    };

    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          "px-6 py-20 md:px-12 md:py-32",
          backgrounds[background],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "large" | "full";
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, size = "default", className, ...props }, ref) => {
    const sizes = {
      default: "max-w-7xl",
      large: "max-w-[1600px]",
      full: "max-w-full",
    };

    return (
      <div
        ref={ref}
        className={cn("mx-auto", sizes[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  subtitle?: string;
}

const SectionHeading = forwardRef<HTMLHeadingElement, SectionHeadingProps>(
  ({ children, align = "center", size = "lg", subtitle, className, ...props }, ref) => {
    const alignments = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    };

    const sizes = {
      sm: "text-2xl md:text-3xl",
      md: "text-3xl md:text-4xl",
      lg: "text-4xl md:text-5xl",
      xl: "text-5xl md:text-6xl",
    };

    return (
      <div ref={ref} className={cn("mb-12 md:mb-16", alignments[align], className)} {...props}>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-semibold mb-4 uppercase tracking-wider text-sm"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={cn(
            "font-bold tracking-tight text-gray-900",
            sizes[size]
          )}
        >
          {children}
        </motion.h2>
      </div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";

export { Section, Container, SectionHeading };
