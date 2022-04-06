import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

export default function HeaderTabs(props) {
    const [activeTab,setActiveTab] = useState("Devlivery")
  return (
      <View style={{flexDirection:"row", alignself:"center"}}>
          <HeaderButtons
              text="Delivery"
              btnColor="black"
              textColor="white"
              activeTab={props.activeTab}
              setActiveTab={props.setActiveTab}
          />
          <HeaderButtons
              text="Pickup"
              btnColor="white"
              textColor="black"
              activeTab={props.activeTab}
              setActiveTab={props.setActiveTab}
          />
    </View>
  )
}

const HeaderButtons = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor: props.activeTab === props.text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
        onPress = {()=>props.setActiveTab(props.text)}
    >
        <Text style={{
            color: props.activeTab === props.text ? "white" : "black",
            fontSize: 15,
            fontWeight:"900"
        }}>{props.text}</Text>
    </TouchableOpacity>
    
)