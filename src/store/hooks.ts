import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './index'

// Use estes hooks em seus componentes
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
