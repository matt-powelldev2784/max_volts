'use client'

import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyItems: 'space-between',
    marginLeft: 8,
    marginRight: 8,
    width: '90%',
    fontSize: '10px',
    backgroundColor: '#f07e19',
    color: 'white', 
    paddingVertical: 2,
  },
})
export const InvoiceRowHeader = () => {
  return (
    <View style={styles.flexRow}>
      <Text style={{ width: 50, height: 'auto', paddingLeft: 4}}>
        Quantity
      </Text>
      <Text style={{ width: 130, height: 'auto'}}>
        Name
      </Text>
      <Text style={{ width: 210, height: 'auto'}}>
        Description
      </Text>
      <Text style={{ width: 50, height: 'auto'}}>
        Each
      </Text>
      <Text style={{ width: 35, height: 'auto' }}>
        VAT
      </Text>
      <Text style={{ width: 80, height: 'auto'}}>
        Total Price
      </Text>
    </View>
  )
}
