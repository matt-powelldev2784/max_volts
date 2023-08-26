import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { T_InvoiceRow } from '@/types/invoice'

interface PdfInvoiceRowProps {
  invoiceRow: T_InvoiceRow
  index: number
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyItems: 'space-between',
    marginLeft: 8,
    marginRight: 8,
    width: '90%',
    fontSize: '11px',
    padding: 0,
  },
})
export const InvoiceRow = ({ invoiceRow, index }: PdfInvoiceRowProps) => {
  const { quantity, name, description, VAT, totalPrice } = invoiceRow
  const priceForEach = invoiceRow.sellPrice
  const backgroundColor = index % 2 === 0 ? '#ffffff' : '#dedede'

  return (
    <View style={styles.flexRow}>
      <Text style={{ width: 50, height: 'auto', paddingVertical: 4, paddingLeft: 4, backgroundColor: `${backgroundColor}`}}>
        {quantity}
      </Text>
      <Text style={{ width: 130, height: 'auto', paddingVertical: 4, paddingRight: 4, backgroundColor: `${backgroundColor}` }}>
        {name}
      </Text>
      <Text style={{ width: 200, height: 'auto',  paddingVertical: 4, paddingRight: 4, backgroundColor: `${backgroundColor}`}}>
        {description}
      </Text>
      <Text style={{ width: 70, height: 'auto',  paddingVertical: 4, paddingRight: 4, backgroundColor: `${backgroundColor}` }}>
        £{priceForEach.toFixed(2)}
      </Text>
      <Text style={{ width: 35, height: 'auto', paddingVertical: 4, paddingRight: 4, backgroundColor: `${backgroundColor}` }}>
        {VAT}%
      </Text>
      <Text style={{ width: 70, height: 'auto', paddingVertical: 4, backgroundColor: `${backgroundColor}`, textAlign:'right', paddingRight:4}}>
        £{totalPrice.toFixed(2)}
      </Text>
    </View>
  )
}
