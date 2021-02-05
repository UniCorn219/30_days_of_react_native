import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import Size from 'src/utils/size'
import { DAYS } from 'src/constants'
import BoxComponent from 'src/components/common/Box'

interface HomeProps {}

const HomeScreen = (props: HomeProps) => {
  return (
    <ScrollView style={styles.mainView}>
      {/*<Swiper height={150} showButtons={false} autoplay={false}>*/}
      {/*</Swiper>*/}
      <View style={styles.touchBoxContainer}>
        {DAYS.map((item, index) => (
          <BoxComponent {...item} index={index} key={item.key} />
        ))}
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    marginTop: 63,
  },
  touchBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Size.dimensions.width,
    borderTopWidth: Size.pixel,
    borderTopColor: '#ccc',
    borderLeftWidth: Size.pixel,
    borderLeftColor: '#ccc',
    borderRightWidth: Size.pixel,
    borderRightColor: '#ccc',
  },
})
