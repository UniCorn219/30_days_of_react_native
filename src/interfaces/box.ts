import { ColorValue } from 'react-native'

export interface Box {
  key: number
  title: string
  isFA: boolean
  icon: string
  color: ColorValue
  hideNav: boolean
  size: number
}
