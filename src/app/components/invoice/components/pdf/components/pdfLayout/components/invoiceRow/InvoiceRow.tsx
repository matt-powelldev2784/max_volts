import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { T_InvoiceRow } from '@/types/invoice'

interface PdfInvoiceRowProps {
  invoiceRow: T_InvoiceRow
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyItems: 'space-between',
    marginLeft: 8,
    marginRight: 8,
    width: '90%',
  },
})
export const InvoiceRow = ({ invoiceRow }: PdfInvoiceRowProps) => {
  const { quantity, name, description, VAT, totalPrice } = invoiceRow
  const priceForEach = invoiceRow.sellPrice

  return (
    <View style={styles.flexRow}>
      <Text style={{ width: 50, height: 'auto', border: '2px solid green' }}>
        {quantity}
      </Text>
      <Text style={{ width: 130, height: 'auto', border: '2px solid green' }}>
        {name}
      </Text>
      <Text style={{ width: 210, height: 'auto', border: '2px solid green' }}>
        {description}
      </Text>
      <Text style={{ width: 50, height: 'auto', border: '2px solid green' }}>
        {priceForEach}
      </Text>
      <Text style={{ width: 35, height: 'auto', border: '2px solid green' }}>
        {VAT}
      </Text>
      <Text style={{ width: 80, height: 'auto', border: '2px solid green' }}>
        {totalPrice}
      </Text>
    </View>
  )
}
