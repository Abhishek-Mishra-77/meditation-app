import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import Meditation_Images from "../../constants/meditation-images";
import AppGradient from "../../components/AppGradient";
import { router, useLocalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from "../../components/CustomButton";

const Meditate = () => {
    const { id } = useLocalSearchParams();
    const [secondsRemaining, setSecondsRemaining] = useState(10);
    const [isMeditating, setIsMeditating] = useState(false);

    useEffect(() => {
        let timerId;

        if (secondsRemaining === 0) {
            setIsMeditating(false);
            return;
        }
        console.log(isMeditating);
        if (isMeditating) {
            timerId = setTimeout(() => {
                setSecondsRemaining(secondsRemaining - 1);
            }, 1000)
        }
        return () => {
            clearTimeout(timerId)
        }

    }, [secondsRemaining])

    return (
        <View className="flex-1">
            <ImageBackground
                resizeMode='cover'
                className="flex-1"
                source={Meditation_Images[Number(id) - 1]}>
                <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
                    <Pressable
                        className="absolute top-16 left-6 z-10"
                        onPress={() => router.back()}>
                        <AntDesign name="leftcircleo" size={50} color="white" />
                    </Pressable>


                    <View className="flex-1 justify-center">
                        <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
                            <Text className="text-4xl text-blue-800">00:{secondsRemaining}</Text>
                        </View>
                    </View>

                    <View className="mb-5">
                        <CustomButton
                            title="Start Meditation"
                            onPress={() => setIsMeditating(true)}
                        />
                    </View>
                </AppGradient>
            </ImageBackground>
        </View>
    )
}

export default Meditate

const styles = StyleSheet.create({})