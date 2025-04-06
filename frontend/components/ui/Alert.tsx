import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-white text-gray-900 border-gray-200',
        success: 'bg-green-50 text-green-900 border-green-200',
        error: 'bg-red-50 text-red-900 border-red-200',
        warning: 'bg-yellow-50 text-yellow-900 border-yellow-200',
        info: 'bg-blue-50 text-blue-900 border-blue-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Alert = ({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>) => (
  <div
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
);

const AlertTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <h5
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
);

const AlertDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <div
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
);

export { Alert, AlertTitle, AlertDescription }; 