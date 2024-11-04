import { create } from 'zustand'
import { FooSlice, fooSlice } from '../slices/foo-slice'
import { BarSlice, barSlice } from '../slices/bar-slice'

type GlobalStore = FooSlice & BarSlice

export const useGlobalStore = create<GlobalStore>()((set) => ({
	...fooSlice(set),
	...barSlice(set),
}))
