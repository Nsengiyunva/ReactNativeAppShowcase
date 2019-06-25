import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import theme from '../../constants/theme';

const TransactionDetail = props => (
  <View
    style={{
      borderColor: theme.colors.gray,
      borderWidth: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.darkGray,
      paddingBottom: '2%',
      paddingTop: '2%'
    }}
  >
    <View style={{ flexDirection: 'row' }}>
      <View>
        <Text
          style={{
            fontSize: theme.fonts.base,
            fontFamily: theme.fonts.semibold
          }}
        >
          {props.transaction.title}
        </Text>
        <View>
          <Text
            style={{
              fontSize: 10,
              fontFamily: theme.fonts.semibold,
              color: theme.colors.darkerGray
            }}
          >
            {props.transaction.refId}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontFamily: theme.fonts.semibold,
              color: theme.colors.darkerGray
            }}
          >
            {props.transaction.time}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontFamily: theme.fonts.semibold,
              color: theme.colors.darkerGray
            }}
          >
            {props.transaction.dueDate}
          </Text>
        </View>
        <View style={{ marginTop: '10%' }}>
          <Text
            style={{
              fontSize: theme.fonts.base,
              fontFamily: theme.fonts.regular
            }}
          >
            From
          </Text>
          <Text
            style={{
              fontSize: theme.fonts.base,
              fontFamily: theme.fonts.regular,
              color: theme.colors.lighterBlack
            }}
          >
            {props.transaction.from}
          </Text>
        </View>

        <View style={{ marginTop: '10%' }}>
          <Text
            style={{
              fontSize: theme.fonts.base,
              fontFamily: theme.fonts.regular
            }}
          >
            To
          </Text>
          <Text
            style={{
              fontSize: theme.fonts.base,
              fontFamily: theme.fonts.regular,
              color: theme.colors.lighterBlack
            }}
          >
            {props.transaction.to}
          </Text>
        </View>
        <View
          style={{
            marginTop: '5%',
            // borderColor: 'red',
            // borderWidth: 1,
            width: '100%'
          }}
        >
          <Text
            style={{
              fontSize: theme.fonts.base,
              fontFamily: theme.fonts.regular
            }}
          >
            Description
          </Text>
          <Text
            style={{
              fontSize: theme.fonts.base,
              fontFamily: theme.fonts.regular,
              color: theme.colors.lighterBlack
            }}
          >
            {props.transaction.description}
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: theme.colors.yellow,
          marginLeft: '12%',
          // padding: 4,
          borderRadius: 4,
          height: '10%',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 10,
          paddingLeft: 5,
          paddingRight: 5
        }}
      >
        <Text
          style={{
            fontSize: theme.fonts.base,
            fontFamily: theme.fonts.regular,
            color: theme.colors.white
          }}
        >
          {props.transaction.transactionStatus}
        </Text>
      </View>
    </View>
    <View style={{ flexDirection: 'row', marginLeft: '50%' }}>
      <TouchableOpacity onPress={() => alert('cancel payment')}>
        <Text
          style={{
            fontSize: theme.fonts.base,
            fontFamily: theme.fonts.regular
          }}
        >
          Cancel
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginLeft: '20%' }}
        onPress={() => alert('pay now')}
      >
        <Text
          style={{
            fontSize: theme.fonts.base,
            fontFamily: theme.fonts.regular,
            color: theme.colors.blue
          }}
        >
          Pay Now
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
export default TransactionDetail;
