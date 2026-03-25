# UI Components Pattern Guide

## Overview

This directory contains reusable UI components built with React, TypeScript, and Tailwind CSS.

## Component Structure

### File Naming
- Use kebab-case for file names (e.g., `button.tsx`, `input.tsx`)
- Export from `index.ts` for easy imports

### Required Dependencies
- `tailwind-variants` - for variant management and className merging
- `react` & `react-dom` - peer dependencies

### Component Template

```tsx
import { type ElementHTMLAttributes, forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export type ComponentVariant = "default" | "secondary";
export type ComponentSize = "sm" | "md" | "lg";

const component = tv(
  {
    base: "base classes here",
    variants: {
      variant: {
        default: "variant classes",
        secondary: "secondary classes",
      },
      size: {
        sm: "size classes",
        md: "more size classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
  {
    twMerge: true,
  },
);

export interface ComponentProps
  extends Omit<ElementHTMLAttributes<HTMLElement>, "className">,
    VariantProps<typeof component> {
  className?: string;
}

export const Component = forwardRef<HTMLElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <element ref={ref} className={component({ variant, size, className })} {...props} />;
  },
);

Component.displayName = "Component";
```

## Rules

1. **Always use named exports** - Never use default exports
2. **Use `forwardRef`** - Allow parent components to access the DOM element
3. **Extend native element props** - Use `Omit<HTMLAttributes<Element>, "className">` to exclude conflicting props
4. **Use `VariantProps<typeof tv>`** - Type-safe variant props
5. **Enable `twMerge: true`** - Clean duplicate class handling
6. **Display name** - Set `ComponentName.displayName` for debugging
7. **Exported types** - Export all types for external use
8. **Index file** - Always export from `index.ts` for clean imports
9. **Use Tailwind canonical classes** - Avoid custom CSS variables like `text-[--color]`. Use standard Tailwind classes like `text-white`, `bg-black` instead

## Tailwind Canonical Classes

Biome provides a `suggestCanonicalClasses` rule that detects non-standard Tailwind classes. Always prefer the canonical form:

| Instead of | Use |
|-----------|-----|
| `text-[--color-white]` | `text-white` |
| `bg-[#0a0a0a]` | `bg-black` |
| `text-[#e5e5e5]` | `text-gray-200` or `text-gray-300` |

Check Tailwind's default color palette for the closest canonical equivalent.

## Export Pattern

```ts
// index.ts
export { Component } from "./component";
export type { ComponentProps, ComponentVariant, ComponentSize } from "./component";
```
