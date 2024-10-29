import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'
import { AppProvider } from '../context/AppContext'

export default function RootLayout() {
  return (
    <AppProvider>
        <Stack>
            <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
        </Stack>
    </AppProvider>
  )
}

const styles = StyleSheet.create({})