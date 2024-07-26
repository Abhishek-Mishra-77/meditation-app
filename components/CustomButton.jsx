import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ title, containerStyles, textStyles, onPress }) => {
    return (
        <TouchableOpacity
            className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({})