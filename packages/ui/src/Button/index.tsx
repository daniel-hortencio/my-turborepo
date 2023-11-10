import { ButtonBase, IButtonBase } from './ButtonBase'

export const ButtonPrimary = ({
  children,
  onClick,
  href,
  type,
  id
}: Omit<IButtonBase, 'className'>) => {
  return (
    <ButtonBase
      className="bg-primary-100 text-white text-sm h-12 flex justify-center w-full rounded items-center"
      onClick={onClick}
      href={href}
      type={type}
      id={id}
    >
      {children}
    </ButtonBase>
  )
}

export const ButtonSecondary = ({
  children,
  onClick,
  href,
  type,
  id
}: Omit<IButtonBase, 'className'>) => {
  return (
    <ButtonBase
      className="bg-transparent border-2 border-primary-100 text-primary-100 h-12 flex justify-center w-full rounded items-center hover:bg-primary-100 hover:text-white transition-all"
      onClick={onClick}
      href={href}
      type={type}
      id={id}
    >
      {children}
    </ButtonBase>
  )
}

export const ButtonWhite = ({
  children,
  onClick,
  href,
  type,
  id
}: Omit<IButtonBase, 'className'>) => {
  return (
    <ButtonBase
      className="rounded px-8 bg-grayscale-50 text-grayscale-300 h-12 text-sm flex items-center justify-center mx-auto font-medium"
      onClick={onClick}
      href={href}
      type={type}
      id={id}
    >
      {children}
    </ButtonBase>
  )
}

export const ButtonRed = ({
  children,
  onClick,
  href,
  type,
  id
}: Omit<IButtonBase, 'className'>) => {
  return (
    <ButtonBase
      className="bg-redscale-50 text-white text-sm h-12 flex justify-center w-full rounded items-center"
      onClick={onClick}
      href={href}
      type={type}
      id={id}
    >
      {children}
    </ButtonBase>
  )
}

export const ButtonGreen = ({
  children,
  onClick,
  href,
  type,
  id
}: Omit<IButtonBase, 'className'>) => {
  return (
    <ButtonBase
      className="bg-[#01996D] text-sm/[24px] font-semibold text-white h-12 flex justify-center w-full rounded-md items-center transition-all"
      onClick={onClick}
      href={href}
      type={type}
      id={id}
    >
      {children}
    </ButtonBase>
  )
}

export const ButtonGray = ({
  children,
  onClick,
  href,
  type,
  id
}: Omit<IButtonBase, 'className'>) => {
  return (
    <ButtonBase
      className="bg-[#F2F6F5] text-sm/[24px] font-semibold text-[#2A2D4D] h-12 flex justify-center w-full rounded-md items-center transition-all"
      onClick={onClick}
      href={href}
      type={type}
      id={id}
    >
      {children}
    </ButtonBase>
  )
}
