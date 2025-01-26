import React from "react";
import { Text, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, Button ,View } from "react-native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";

const handleHead = ({tintColor}) => <Text style={{color: tintColor}}>H1</Text>


export default Journal  = ({navigation , route}) => {
	const richText = React.useRef();

    const [usertext,setusertext]  = React.useState('')

    const {selectedDate } = route.params
    console.log(selectedDate)


    const handlesave = ()=>{
        alert('saved')
        navigation.navigate('mainpage')

        /** Here we make api call to backend to store the user text */
    }

	return (
    <SafeAreaView>
        <ScrollView>
      <RichEditor  
        ref={richText}
        initialContentHTML={'Hey there <b>{user name}</b> <p> - </p> <p> - </p> <p> - </p><p> - <h3> Here You can write your moments of today</h3></p><p> - </p><p> - </p><p> - </p><p>  - <h3>or</h3> </p><p> - </p><p> - </p><p> - </p><p> - <h3>anything you want !!! ;)</h3></p>'}
        onChange={ descriptionText => {
            console.log("descriptionText:", descriptionText);
            setusertext(descriptionText)
        }}
        />

</ScrollView>
        <RichToolbar
                    editor={richText} 
                    iconMap={{ [actions.heading1]: handleHead }} />
    <View>
        <Button title="Save" onPress={handlesave} />
    </View>
    </SafeAreaView>
  );
};

