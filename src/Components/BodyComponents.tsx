import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../Theme/AppTheme';


export const BodyComponents = (props: any) => {

    const { height } = useWindowDimensions () ;
    return (
        <View style={{
            ...styles.contentBody,
            height: height*0.88,
        }}>
            {props.children}
        </View>
    )
}

export default BodyComponents