import type { ComponentPropsWithoutRef } from 'react'

type StyleProps = { variant?: 'primary' | 'secondary' }
type ButtonProps = StyleProps & (
  | (ComponentPropsWithoutRef<'a'> & { href: string })
  | (ComponentPropsWithoutRef<'button'> & { href?: never })
)

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const classes = `button button--${variant} ${className}`
  if (typeof props.href === 'string') {
    return <a className={classes} {...props as ComponentPropsWithoutRef<'a'>} />
  }
  return <button type="button" className={classes} {...props as ComponentPropsWithoutRef<'button'>} />
}
