import { Button, type ButtonVariant, type ButtonSize } from "@/components/ui";

const variants: ButtonVariant[] = ["primary", "secondary", "ghost", "outline"];
const sizes: ButtonSize[] = ["sm", "md", "lg"];

export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 p-8">
      <h1 className="mb-8 text-3xl font-bold text-white">UI Components</h1>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-white">Button</h2>

        <div className="mb-6">
          <h3 className="mb-3 text-sm text-gray-200">Variants</h3>
          <div className="flex flex-wrap gap-4">
            {variants.map((variant) => (
              <Button key={variant} variant={variant}>
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-3 text-sm text-gray-200">Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            {sizes.map((size) => (
              <Button key={size} size={size}>
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-3 text-sm text-gray-200">States</h3>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button variant="secondary" disabled>
              Disabled Secondary
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-3 text-sm text-gray-200">With Icons</h3>
          <div className="flex flex-wrap gap-4">
            <Button>
              <span>🔗</span>
              Link Button
            </Button>
            <Button variant="outline">
              <span>📤</span>
              Share
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
