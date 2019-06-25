import React from 'react';
import { View, Text } from 'react-native';
import theme from '../../constants/theme';

const ItemDetailEnd = ({ amount = 20300000, status = 'Pending' }) => (
  <View
    style={{
      flexDirection: 'row',
      // borderWidth: 1,
      width: '100%',
      height: '70%',
      // marginRight: '15%' 
      alignItems: 'center'
    }}
  >
    <View style={{ flexDirection: 'column', paddingRight: '5%'}}>
      <Text
        style={{ fontSize: 10}}>
        Ugx{' '}
        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
          {amount}
        </Text>
      </Text>
      <Text
        style={{
          fontSize: 10,
          fontFamily: theme.fonts.regular,
          color: theme.colors.yellow,
          alignSelf: 'flex-end'
        }}
      >
        {status}
      </Text>
    </View>
  </View>
);
export default ItemDetailEnd;
