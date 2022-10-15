import {ChangeEvent, FocusEvent, KeyboardEvent, Ref} from "react"

export type InputPropsType = {
  isPrimary?: boolean
  isSecondary?: boolean
  className?: string
  type?: "text"
  placeholder?: string
  value?: string
  autoFocus?: boolean
  ref?: Ref<HTMLInputElement>
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  setValue?: (value: string) => void
  onEnter?: () => void
  onEscape?: () => void
}
