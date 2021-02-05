import { Dimensions, PixelRatio } from 'react-native'

const Size = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  dimensions: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
}

export default Size
