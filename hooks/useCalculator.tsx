import { useEffect, useRef, useState } from "react"


enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷'
}

export const useCalculator = () => {

  const [formula, setFormula] = useState('0')

  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    setFormula(number)

  }, [number])

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
    setFormula('0');

    lastOperation.current = undefined;
  }

  const toggleSign = () => {
    if (!number.includes('-')) {
      return setNumber('-' + number);
    }

    return setNumber(number.split('-')[1])
  }

  const deleteLast = () => {
    if (number.length === 2 && number.includes('-')) {
      return setNumber('0')
    }
    if (number.length === 1) {
      return setNumber('0')
    }

    if (number.length > 1) {
      return setNumber(number.slice(0, -1))
    }

    return setNumber('0')
  }

  const buildNumber = (numberString: string) => {
    //Verificar si ya existe el punto decimal
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      //evaluar si es otro cero y no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      //evaluar si es diferente de cero y no hay punto si el primero es numero
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString)
      }

      //evitar el 00000.00
      if (numberString === '0' && !number.includes('.')) {
        return;
      }

    }

    setNumber(number + numberString);
  }

  return {
    //Props
    formula,
    number,
    prevNumber,

    //Metodos
    buildNumber,
    clean,
    toggleSign,
    deleteLast
  }

}