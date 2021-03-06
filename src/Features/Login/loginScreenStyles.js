import { StyleSheet } from 'react-native';

const LoginScreenStyles = StyleSheet.create({
  LoginScreenContainer: {
    position: 'relative',
    height: '100%',
    width: '100%',
    top: 20 * global.mpx,
  },
  LoginInnerContainer: {
    position: 'relative',
    height: '100%',
    width: '100%',
    top: 0 * global.mpx,
  },
  LoginScollViewContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#F4F7F9',
  },
  CurveContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  Curve: {
    top: -50 * global.mpx,
    right: 0,
    position: 'absolute',
    height: '100%',
  },
  LoginBubbles: {
    position: 'absolute',
    top: global.screenHeight / 2 - 170 * global.mpx,
  },
  Login: {
    position: 'absolute',
    width: 241 * global.mpx,
    height: 292 * global.mpx,
    backgroundColor: global.white,
    left: 39 * global.mpx,
    top: global.screenHeight / 2 - 146 * global.mpx,
    borderRadius: 17 * global.mpx,
    borderBottomLeftRadius: 17 * global.mpx,
  },
  StreamStyleLogo: { left: 100 * global.mpx, bottom: 23 * global.mpx },
  WelcomeText: {
    width: 151 * global.mpx,
    color: global.secondaryColor,
    left: 45 * global.mpx,
    top: 53 * global.mpx,
    position: 'absolute',
    textAlign: 'center',
    opacity: 0.6,
  },
  FocusedTextInput: {
    position: 'absolute',
    left: 26 * global.mpx,
    top: 125 * global.mpx,
    height: 27 * global.mpx,
    width: 190 * global.mpx,
    paddingLeft: 20 * global.mpx,
    borderWidth: 1 * global.mpx,
    borderColor: global.secondaryColor,
    borderRadius: 5 * global.mpx,
    color: global.secondaryColor,
    fontWeight: 'bold',
  },
  TextInput: {
    position: 'absolute',
    left: 26 * global.mpx,
    top: 125 * global.mpx,
    height: 27 * global.mpx,
    width: 190 * global.mpx,
    paddingLeft: 20 * global.mpx,
    borderWidth: 1 * global.mpx,
    borderColor: '#E7E0EA',
    borderRadius: 5 * global.mpx,
    fontWeight: 'bold',
  },
  FocusedInvalidInput: {
    position: 'absolute',
    left: 26 * global.mpx,
    top: 125 * global.mpx,
    height: 27 * global.mpx,
    width: 190 * global.mpx,
    paddingLeft: 20 * global.mpx,
    borderWidth: 1 * global.mpx,
    borderColor: global.danger,
    borderRadius: 5 * global.mpx,
    color: global.danger,
    fontWeight: 'bold',
  },
  Register: {
    position: 'absolute',
    bottom: 50 * global.mpx,
    left: 45 * global.mpx,
    backgroundColor: global.secondaryColor,
    borderRadius: 8 * global.mpx,
    alignItems: 'center',
    justifyContent: 'center',
    width: 152 * global.mpx,
    height: 30 * global.mpx,
  },
  LoaderContainer: {
    position: 'absolute',
    bottom: 50 * global.mpx,
    left: '40%',
  },
  ErrorMessage: {
    position: 'absolute',
    left: 40 * global.mpx,
    top: 160 * global.mpx,
    color: global.secondaryDangerColor,
    width: '80%',
  },
  ErrorMessageBang: {
    position: 'absolute',
    left: 26 * global.mpx,
    top: 161 * global.mpx,
    color: global.secondaryDangerColor,
  },
});
export { LoginScreenStyles };
