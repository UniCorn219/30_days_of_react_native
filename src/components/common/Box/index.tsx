import React from 'react'
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native'
import IconFa from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons'

import { Box } from 'src/interfaces/box'
import Size from 'src/utils/size'

interface BoxProps extends Box {
  index: number
}

const BoxComponent = (props: BoxProps) => {
  const { key, index, isFA, icon, size } = props

  return (
    <TouchableHighlight key={key} style={[styles.touchBox, index % 3 === 2 ? styles.touchBox2 : styles.touchBox1]}>
      <View style={styles.boxContainer}>
        <Text>Day {index + 1} </Text>
        {isFA
          ? <IconFa name={icon} size={size} style={[styles.boxIcon]} />
          : <Icon name={icon} size={size} style={[styles.boxIcon]}/>}
      </View>
    </TouchableHighlight>
  )
}

export default BoxComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxText: {
    position: 'absolute',
    bottom: 15,
    width: Size.dimensions.width / 3,
    textAlign: 'center',
    left: 0,
    backgroundColor: 'transparent',
  },
  boxIcon: {
    position: 'relative',
    top: -10,
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Size.dimensions.width / 3,
    height: Size.dimensions.width / 3,
  },
  touchBox: {
    width: Size.dimensions.width / 3 - 0.33334,
    height: Size.dimensions.width / 3,
    backgroundColor: '#fff',
  },
  touchBox1: {
    borderBottomWidth: Size.pixel,
    borderBottomColor: '#ccc',
    borderRightWidth: Size.pixel,
    borderRightColor: '#ccc',
  },
  touchBox2: {
    borderBottomWidth: Size.pixel,
    borderBottomColor: '#ccc',
    borderLeftWidth: Size.pixel,
    borderLeftColor: '#ccc',
  },
})
