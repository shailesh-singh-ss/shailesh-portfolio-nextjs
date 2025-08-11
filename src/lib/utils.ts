import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function scrollToSection(elementId: string) {
  try {
    const element = document.getElementById(elementId);
    if (element) {
      // Calculate offset for fixed navbar
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    } else {
      console.warn(`Element with id "${elementId}" not found`);
    }
  } catch (error) {
    console.error("Error scrolling to section:", error);
  }
}
