import {StyleSheet} from 'react-native';
import * as colors from '../../util/colors';

export default sharedStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: colors.lightText
  },
  card: {
    marginHorizontal: 0,
    borderRadius: 15
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.disabled,
    backgroundColor: '#fff'
  },
  h1: {
    textAlign: 'center',
    fontSize: 26, color:
    colors.darkPrimary,
    fontWeight: 'bold'
  },
  h2center: {
    textAlign: 'center',
    fontSize: 22, color:
    colors.darkPrimary,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: 22, color:
    colors.darkPrimary,
    fontWeight: 'bold'
  },
  h3:
    {
      textAlign: 'center',
      fontSize: 18, color:
      colors.secondaryText
    },
  questionText: {
    fontSize: 22, color:
    colors.secondaryText
  },
  hintText: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
    color: colors.disabled,
    marginVertical: 10
  },
  subtitle: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 18
  },
  normalText: {
    textAlign: 'center',
    color: colors.secondaryText
  },
  divider: {
    marginVertical: 10
  },
  checkBoxSimple: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 0,
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    justifyContent: 'center'
  },
  flippableView: {
    backfaceVisibility: 'hidden',
  },
});