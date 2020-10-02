import {
  ActivityIndicator as _ActivityIndicator,
  Button as _Button,
  DrawerLayoutAndroid as _DrawerLayoutAndroid,
  FlatList as _FlatList,
  Image as _Image,
  InputAccessoryView as _InputAccessoryView,
  KeyboardAvoidingView as _KeyboardAvoidingView,
  Modal as _Modal,
  NavigatorIOS as _NavigatorIOS,
  RefreshControl as _RefreshControl,
  ScrollView as _ScrollView,
  SectionList as _SectionList,
  SnapshotViewIOS as _SnapshotViewIOS,
  StatusBar as _StatusBar,
  Switch as _Switch,
  TabBarIOS as _TabBarIOS,
  TextInput as _TextInput,
  Text as _Text,
  TouchableHighlight as _TouchableHighlight,
  TouchableNativeFeedback as _TouchableNativeFeedback,
  TouchableOpacity as _TouchableOpacity,
  TouchableWithoutFeedback as _TouchableWithoutFeedback,
  View as _View,
  ButtonProps,
} from 'react-native';
import {makeHelper} from './helper';

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export const ActivityIndicator = makeHelper(_ActivityIndicator);
export const Button = makeHelper<Optional<ButtonProps, 'onPress'>>(_Button);
export const DrawerLayoutAndroid = makeHelper(_DrawerLayoutAndroid);
export const FlatList = makeHelper(_FlatList);
export const Image = makeHelper(_Image);
export const InputAccessoryView = makeHelper(_InputAccessoryView);
export const KeyboardAvoidingView = makeHelper(_KeyboardAvoidingView);
export const Modal = makeHelper(_Modal);
export const RefreshControl = makeHelper(_RefreshControl);
export const ScrollView = makeHelper(_ScrollView);
export const SectionList = makeHelper(_SectionList);
export const SnapshotViewIOS = makeHelper(_SnapshotViewIOS);
export const StatusBar = makeHelper(_StatusBar);
export const Switch = makeHelper(_Switch);
export const TextInput = makeHelper(_TextInput);
export const Text = makeHelper(_Text);
export const TouchableHighlight = makeHelper(_TouchableHighlight);
export const TouchableNativeFeedback = makeHelper(_TouchableNativeFeedback);
export const TouchableOpacity = makeHelper(_TouchableOpacity);
export const TouchableWithoutFeedback = makeHelper(_TouchableWithoutFeedback);
export const View = makeHelper(_View);
