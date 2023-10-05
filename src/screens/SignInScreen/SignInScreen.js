import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import imggglogo from "../../../assets/images/imggglogo.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";

const SignInScreen = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const { height } = useWindowDimensions;

  const onSignInPressed = () => {
    setLoading(true);
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
  };
  const onSignInWithGooglePressed = () => {
    console.warn("Sign In with Google");
  };
  const onSignInWithFacebook = () => {
    console.warn("Sign In with Facebook");
  };
  const onSignInWithApple = () => {
    console.warn("Sign In with Apple");
  };
  const onSignUpPress = () => {
    console.warn("Sign Up");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={imggglogo} style={[styles.Logo]} resizeMode="contain" />
        <View>
          <Text style={styles.InfoText}>
            {" "}
            MemoriesGuard - an app to save and classify important memories with
            custom names. Keep them safe from prying eyes in your gallery.
            Organize, relive, and cherish your moments your way.
          </Text>
        </View>
        <CustomInput placeholder="Email" value={email} setValue={setemail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton
          text="Sign In"
          onPress={onSignInPressed}
          loading={loading}
        />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
          bgColor="#f9fbfc"
          fgColor="grey"
        />
        <CustomButton
          text="Sign In with Google"
          onPress={onSignInWithGooglePressed}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInWithFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign In with Apple"
          onPress={onSignInWithApple}
          bgColor="#E3E3E3"
          fgColor="#363636"
        />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
          bgColor="#f9fbfc"
          fgColor="gray"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  Logo: {
    width: "100%",
    maxWidth: 300,
    height: 150,
  },
  InfoText: {
    lineHeight: 20,
    marginTop: 10,
    textAlign: "center",
  },
});
export default SignInScreen;
