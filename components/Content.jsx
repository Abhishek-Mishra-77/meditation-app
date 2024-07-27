import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Content = ({ children }) => {
  return (
    <SafeAreaView className='flex-1 px-5 py-3'>
      {children}
    </SafeAreaView>
  )
}

export default Content

const styles = StyleSheet.create({})