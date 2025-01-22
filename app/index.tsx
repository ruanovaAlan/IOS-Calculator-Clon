import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>

      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant='h1' >50 x 500000</ThemeText>
        <ThemeText variant='h2' >250</ThemeText>
      </View>

      {/* Botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label='C'
          blackText
          color={Colors.lightGray}
          onPress={() => console.log('C')}
        />
        <CalculatorButton
          label='+/-'
          blackText
          color={Colors.lightGray}
          onPress={() => console.log('+/-')}
        />
        <CalculatorButton
          label='del'
          blackText
          color={Colors.lightGray}
          onPress={() => console.log('del')}
        />
        <CalculatorButton
          label='÷'
          color={Colors.orange}
          onPress={() => console.log('÷')}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label='7'
          color={Colors.darkGray}
          onPress={() => console.log('7')}
        />
        <CalculatorButton
          label='8'
          color={Colors.darkGray}
          onPress={() => console.log('8')}
        />
        <CalculatorButton
          label='9'
          color={Colors.darkGray}
          onPress={() => console.log('9')}
        />
        <CalculatorButton
          label='x'
          color={Colors.orange}
          onPress={() => console.log('x')}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label='4'
          color={Colors.darkGray}
          onPress={() => console.log('4')}
        />
        <CalculatorButton
          label='5'
          color={Colors.darkGray}
          onPress={() => console.log('5')}
        />
        <CalculatorButton
          label='6'
          color={Colors.darkGray}
          onPress={() => console.log('6')}
        />
        <CalculatorButton
          label='-'
          color={Colors.orange}
          onPress={() => console.log('-')}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label='1'
          color={Colors.darkGray}
          onPress={() => console.log('1')}
        />
        <CalculatorButton
          label='2'
          color={Colors.darkGray}
          onPress={() => console.log('2')}
        />
        <CalculatorButton
          label='3'
          color={Colors.darkGray}
          onPress={() => console.log('3')}
        />
        <CalculatorButton
          label='+'
          color={Colors.orange}
          onPress={() => console.log('+')}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label='0'
          color={Colors.darkGray}
          doubleSize
          onPress={() => console.log('0')}
        />
        <CalculatorButton
          label='.'
          color={Colors.darkGray}
          onPress={() => console.log('.')}
        />
        <CalculatorButton
          label='='
          color={Colors.orange}
          onPress={() => console.log('=')}
        />
      </View>

    </View>
  )
}

export default CalculatorApp