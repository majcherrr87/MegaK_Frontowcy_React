import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from 'react'

type Props = {
	value: string
}

export type PartialHTMLInputElement = Pick<HTMLInputElement, 'focus'>

export const LimitedForwardedRefInput = forwardRef(
	({ value }: Props, ref: ForwardedRef<PartialHTMLInputElement>) => {
		const inputRef = useRef<HTMLInputElement>(null)
		useImperativeHandle(
			ref,
			() => ({
				focus: () => {
					inputRef.current?.focus()
				},
			}),
			[],
		)

		return <input type="text" value={value} ref={inputRef} />
	},
)
