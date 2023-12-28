import { colors } from 'config/colors'
import React from 'react'
import { ColorValue, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import Medium from 'typography/medium-text'
type props = {
    style?: StyleProp<ViewStyle>
    label?: string
    numberOfLines?:number,
    color?: ColorValue
    children?: JSX.Element | JSX.Element[]
}
export const EmptyList = (props: props) => {
    const { children, style, label = 'No Result Found', color = colors.black,numberOfLines } = props;
    return (
        <View
            style={[styles.contentContainerStyle, style]}>
            {children}
            <Medium style={{ textAlign:'center'}} numberOfLines={numberOfLines} label={label} color={color} />
        </View>
    )
}
const styles = StyleSheet.create({
    contentContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    }
})