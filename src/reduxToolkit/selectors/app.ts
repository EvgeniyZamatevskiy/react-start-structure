import { RootStateType } from 'reduxToolkit'
import { SupplementedItemType } from 'reduxToolkit/slices/app/types'

export const selectIsLoading = (state: RootStateType): boolean => state.app.isLoading

export const selectItems = (state: RootStateType): SupplementedItemType[] => state.app.items

export const selectIsDisabled = (state: RootStateType): boolean => state.app.isDisabled

export const selectErrorMessage = (state: RootStateType): string => state.app.errorMessage