import { Text, Pressable } from 'react-native'
import React from 'react'

const Button = ({ buttonText, onPress, onClick, children, ...props }) => {
  return (
    <Pressable
      onPress={onPress}
      onClick={onClick}
      {...props}
      style={{
        marginTop: 10,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 3
      }}
    >
      <Text
        style={{ color: 'white' }}
      >
        {buttonText}
      </Text>
    </Pressable>
  )
}

export default Button
