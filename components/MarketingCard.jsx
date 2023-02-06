import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Layout, Text } from '@ui-kitten/components'

const Header = props => (
  <View {...props}>
    <Text category="s1">Clients Not invited</Text>
    <Text category="h6">Invite your clients to your salon and earn money</Text>
  </View>
)

const Footer = props => (
  <View {...props} style={[props.style, styles.footerContainer]}>
    {/* <Button
      style={styles.footerControl}
      size='small'
      status='basic'>
      CANCEL
    </Button> */}
    <Button style={styles.footerControl} size="small">
      Start
    </Button>
  </View>
)

export const MarketingCard = ({ title, subtitle, status }) => (
  <React.Fragment>
    <Layout style={styles.topContainer} level="1">
      <Card style={styles.card}>
        <Text category="s1" style={{ color: `${ status ? 'green' : 'red'}` }}>
          {title ?? ''}
        </Text>
        <Text category="h6">{title ?? ''}</Text>
        <Text> {subtitle ?? ''}</Text>
        <View>
          <Button style={styles.footerControl} size="small">
            Let's do it!
          </Button>
        </View>
      </Card>
    </Layout>
  </React.Fragment>
)

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    flex: 1,
    margin: 2
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  footerControl: {
    marginHorizontal: 2,
    width: 100
  }
})
