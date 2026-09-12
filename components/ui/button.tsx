import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent text-[10px] font-medium uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'border-maroon bg-maroon text-gold-light hover:bg-maroon-dark hover:shadow-[0_0_20px_rgba(200,157,71,0.25)]',
        outline: 'border-[#E5DDD0] bg-transparent text-maroon/70 hover:bg-[#F5F0E5] hover:border-gold/30',
        secondary: 'border-[#C89D47]/20 bg-[#F5F0E5] text-maroon/70 hover:bg-[#EDE8DB]',
        ghost: 'border-transparent text-maroon/50 hover:bg-[#F5F0E5] hover:text-maroon',
        destructive: 'border-destructive/30 bg-destructive/10 text-destructive hover:bg-destructive/20',
        link: 'border-transparent text-gold-dark underline-offset-4 hover:text-maroon hover:underline',
        gold: 'border-gold bg-gold text-maroon hover:bg-gold-dark hover:shadow-[0_0_20px_rgba(200,157,71,0.25)]',
      },
      size: {
        default: 'h-10 gap-1.5 px-6',
        xs: "h-7 gap-1 px-3 text-[9px]",
        sm: "h-8 gap-1 px-4 text-[9px]",
        lg: 'h-12 gap-1.5 px-8',
        icon: 'size-10 rounded-full',
        'icon-xs': "size-7 rounded-full text-[9px]",
        'icon-sm': 'size-8 rounded-full',
        'icon-lg': 'size-12 rounded-full',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

function Button({ className, variant = 'default', size = 'default', ...props }: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return <ButtonPrimitive data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }