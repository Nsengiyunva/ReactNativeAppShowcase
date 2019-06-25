import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import profile from '../../../assets/profilepic.png';
import theme from '../../constants/theme';
import Icon from 'react-native-vector-icons/Ionicons'

const AccountProfilePicture = props => (
  <View
    style={{
      width: 60,
      height: 75,
      marginLeft: 10,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
        // borderWidth: 1,
      //   borderColor: 'green'
    }}
  >
    <View
      style={{
        borderRadius: 20
        // borderWidth: 1
      }}
    >
      <Image
        source={profile}
        style={{ width: 55, height: 55 }}
        resizeMode='contain'
      />
        <Icon name="md-close-circle" size={25} color="rgb(0,0,0)" style={{ position: 'absolute', right: 3, bottom: -5 }} />
    </View>
    <Text
      style={{
        fontSize: theme.fonts.base,
        fontFamily: theme.fonts.regular,
        color: theme.colors.lighterBlack
      }}
    >
      {props.name}
    </Text>
  </View>
);
export default AccountProfilePicture;
