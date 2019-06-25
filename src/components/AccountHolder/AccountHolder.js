import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


import profile from '../../../assets/profilepic.png';

import AdminButton from './AdminButton';
import ItemDetailEnd from './ItemDetailEnd';

import theme from '../../constants/theme';
// import { TouchableOpacity } from 'react-native-gesture-handler';

class AccountHolder extends Component {
  adminButtonHandler = (
    <View
      style={{
        flex: 1.3,
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <AdminButton />
    </View>
  );

  transactionDetail = (
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <ItemDetailEnd
        transactionDetailHandler={this.props.toggleItemDetails}
      />
    </View>
  );

  renderTransactionDetailsIcon = this.props.iconDirection === 'arrowUp' ? (
    (
      <Icon
        style={{ position: 'absolute', right: -10 }}
        name="keyboard-arrow-up"
        size={25}
        color="gray"
        onPress={this.props.toggleItemDetails}
      />
    )
  ) : (
    <Icon
      style={{ position: 'absolute', right: -10 }}
      name="keyboard-arrow-down"
      size={25}
      color="gray"
      onPress={this.props.toggleItemDetails}
    />
  )

  render() {
    const { user, name, status, transaction } = this.props;

    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 70,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.darkGray,
          // borderColor: 'green',
          // borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View
          style={{
            height: 55,
            width: 55,
            borderRadius: 45,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            source={profile}
            resizeMode="cover"
            style={{ width: '90%', height: '90%', borderRadius: 45 }}
          />
        </View>
        <View
          style={{
            flex: 3,
            height: '70%',
            marginLeft: '4%',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}
        >
          <Text
            style={{
              fontSize: 11,
              fontFamily: theme.fonts.semibold
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: theme.fonts.base,
              fontFamily: theme.fonts.regular
            }}
          >
            {status}
          </Text>
        </View>
        {user ? this.adminButtonHandler : null}
        {transaction ? this.transactionDetail : null}
        {(status && transaction) ? this.renderTransactionDetailsIcon : null}
      </View>
    );
  }
}
export default AccountHolder;
