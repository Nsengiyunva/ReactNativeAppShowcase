import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header/Header';
import AccountProfilePicture from '../../components/AccountProfilePicture/AccountProfilePicture';
import ActionTopHeader from '../../components/ActionHeader/ActionTopHeader';
import ActionBottomHeader from '../../components/ActionHeader/ActionBottomHeader';
import UserPermissionItem from '../../components/UserPermissionItem/UserPermissionItem';

import theme from '../../constants/theme';

const data = [
  { id: 1, name: 'Current Account', description: 'Current' },
  { id: 2, name: 'Joint Account', description: 'Joint' },
  { id: 3, name: 'Fixed Account', description: 'Fixed' },
  { id: 4, name: 'Limbo Account', description: 'Limbo' }
];

const accountMembers = [
  { id: 1, name: 'Me' },
  { id: 2, name: 'Timo' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Andrea' },
  { id: 5, name: 'Miriam' },
  { id: 6, name: 'Jeremiah' },
  { id: 7, name: 'Carrey' }
];
class CreateAccount extends Component {
  state = {
    mode: 2
  };

  topHeader = <ActionTopHeader alertText='done creating account' />;

  bottomHeader = <ActionBottomHeader bottomText='Create Account' />;

  showScreen = name => this.setState({ mode: name });

  render() {
    let title;
    const { mode } = this.state;
    if (mode === 1) {
      title = 'Current Account';
    } else if (mode === 2) {
      title = 'Joint Account';
    } else if (mode === 3) {
      title = 'Fixed Account';
    } else if (mode === 4) {
      title = 'Limbo Account';
    }
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: theme.colors.white
        }}
      >
        <View style={{ height: '15%' }}>
          <Header
            style={{
              borderWidth: 0
            }}
            topHeader={this.topHeader}
            bottomHeader={this.bottomHeader}
          />
        </View>

        <View style={{ height: '10%' }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              flexDirection: 'row',
              width: '100%',
              marginTop: 10,
              marginBottom: 10
            }}
          >
            {data.map(item => {
              const btnStyles =
                mode === item.id
                  ? { backgroundColor: theme.colors.white }
                  : { backgroundColor: theme.colors.darkGray };
              const textStyles =
                mode === item.id
                  ? { color: theme.colors.blue }
                  : { color: theme.colors.gray };
              return (
                <View
                  key={item.id}
                  style={{
                    padding: 10,
                    backgroundColor: theme.colors.darkGray,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    marginLeft: 10
                  }}
                >
                  <TouchableOpacity
                    style={[
                      {
                        borderWidth: 0,
                      },
                      btnStyles
                    ]}
                    onPress={() => this.showScreen(item.id)}
                  >
                    <Text
                      style={[
                        {
                          fontFamily: theme.fonts.regular,
                          fontSize: theme.fonts.base + 2
                        },
                        textStyles
                      ]}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '5%',
            paddingLeft: 20,
            backgroundColor: theme.colors.lightGreen
          }}
        >
          <Icon name='md-people' size={30} color={theme.colors.white} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                marginLeft: 10,
                fontFamily: theme.fonts.semibold,
                fontSize: theme.fonts.base + 2,
                color: theme.colors.white
              }}
            >
              {title}
            </Text>
            {mode === 2 ? (
              <Text
                style={{
                  marginLeft: 5,
                  fontFamily: theme.fonts.regular,
                  fontSize: theme.fonts.base + 2,
                  color: theme.colors.white
                }}
              >
                for group savings
              </Text>
            ) : null}
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: '10%',
            marginLeft: '5%',
            marginRight: '5%',
            marginTop: '5%',
            alignItems: 'flex-end'
          }}
        >
          <Icon name='md-people' size={35} color={theme.colors.black} />
          <View style={{ flex: 3, marginLeft: 15 }}>
            <Text
              style={{
                flex: 1.8,
                fontSize: theme.fonts.base,
                fontFamily: theme.fonts.regular,
                paddingLeft: 4
              }}
            >
              Account name
            </Text>
            <TextInput
              style={{
                flex: 2,
                fontSize: theme.fonts.base + 2,
                fontFamily: theme.fonts.regular,
                paddingBottom: 0,
                borderBottomColor: theme.colors.darkerGray,
                borderBottomWidth: 1
              }}
            />
          </View>
        </View>
        {mode === 1 ? (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>Current Account</Text>
          </View>
        ) : null}
        {mode === 2 ? (
          <>
            <View
              style={{
                width: '100%',
                // marginLeft: '5%',
                // marginRight: '5%',
                marginTop: '2%',
                height: '20%',
                borderTopColor: theme.colors.darkerGray,
                // borderTopWidth: 1
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    fontSize: theme.fonts.base + 2,
                    fontFamily: theme.fonts.regular,
                    marginLeft: '5%'
                  }}
                >
                  Account Members
                </Text>
                <TouchableOpacity
                  onPress={() => alert('adding this member to this account')}
                >
                  <Text
                    style={{
                      fontSize: theme.fonts.base + 2,
                      fontFamily: theme.fonts.regular,
                      color: theme.colors.blue,
                      marginRight: '5%'
                    }}
                  >
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '4%'
                }}
              >
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                >
                  {accountMembers.map(member => (
                    <AccountProfilePicture key={member.id} name={member.name} />
                  ))}
                </ScrollView>
              </View>
            </View>
            <ScrollView
              style={{
                paddingBottom: 20,
                marginTop: 10
              }}
            >
              <View
                style={{
                  width: '90%',
                  marginLeft: 20,
                  marginRight: 20
                  // borderColor: 'green',
                  // borderWidth: 1
                }}
              >
                <Text
                  style={{
                    fontSize: theme.fonts.base,
                    fontFamily: theme.fonts.regular
                  }}
                >
                  Admin Rules
                </Text>
                <Text
                  style={{
                    fontSize: theme.fonts.base,
                    fontFamily: theme.fonts.regular
                  }}
                >
                  These are the administrator rules specifying the "number of
                  admins required to"
                </Text>
                {[
                  { id: 1, name: 'add a member', number: 1 },
                  { id: 2, name: 'make a member an admin', number: 0 },
                  { id: 3, name: 'make a withdrawal', number: 2 },
                  { id: 4, name: 'make payment', number: 2 },
                  { id: 5, name: 'change rules', number: 2 },
                  { id: 6, name: 'remove an admin', number: 3 }
                ].map(item => (
                  <UserPermissionItem
                    key={item.id}
                    name={item.name}
                    number={item.number}
                  />
                ))}
              </View>
            </ScrollView>
          </>
        ) : null}
        {mode === 3 ? (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>Fixed Account</Text>
          </View>
        ) : null}
        {mode === 4 ? (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>Limbo Account</Text>
          </View>
        ) : null}
      </View>
    );
  }
}
export default CreateAccount;
