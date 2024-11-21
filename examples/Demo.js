import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, PanResponder} from 'react-native';
import Menu from 'react-native-popup-menu';
import Example from './Example';
import BasicExample from './BasicExample';
import ControlledExample from './ControlledExample';
import ExtensionExample from './ExtensionExample';
import ModalExample from './ModalExample';
import StylingExample from './StylingExample';
import NonRootExample from './NonRootExample';
import TouchableExample from './TouchableExample';
import MenuMethodsExample from './MenuMethodsExample';
import CloseOnBackExample from './CloseOnBackExample';
import FlatListExample from './FlatListExample';
import InFlatListExample from './InFlatListExample';
import PopoverExample from './PopoverExample';

import { SafeAreaInsetsContext } from 'react-native-safe-area-context';


const demos = [
    {Component: BasicExample, name: 'Basic example'},
    {Component: Example, name: 'Advanced example'},
    {Component: ControlledExample, name: 'Controlled example'},
    {Component: MenuMethodsExample, name: 'Controlling menu using menu methods'},
    {Component: ExtensionExample, name: 'Extensions example'},
    {Component: ModalExample, name: 'Modal example'},
    {Component: StylingExample, name: 'Styling example'},
    {Component: TouchableExample, name: 'Touchable config example'},
    {Component: NonRootExample, name: 'Non root example'},
    {Component: CloseOnBackExample, name: 'Close on back button press example'},
    {Component: FlatListExample, name: 'Using FlatList'},
    {Component: InFlatListExample, name: 'Menu in FlatList'},
    {Component: PopoverExample, name: 'Popover renderer'},
];

// show debug messages for demos.
Menu.debug = true;

export default class Demo extends Component {
    constructor(props, ctx) {
        super(props, ctx);
        this.state = {
            selected: undefined,
        };
        this.panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) => {
                // Detect a swipe right
                return gestureState.dx > 20;
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx > 50) {
                    // If swipe right, go back to main selection
                    this.setState({selected: undefined});
                }
            },
        });
    }

    render() {
       return (
         <SafeAreaInsetsContext.Consumer>
           {(insets) => {
             const insetStyle = getInsetStyle(insets);
             if (this.state.selected) {
               const SelectedComponent = this.state.selected;
               return (
                 <View style={[styles.demoContainer, insetStyle]} {...this.panResponder.panHandlers}>
                   <SelectedComponent />
                 </View>
               );
             }

             return (
               <View style={[styles.container, insetStyle]}>
                 <Text>Select example:</Text>
                 {demos.map(this.renderDemo, this)}
               </View>
             );
           }}
         </SafeAreaInsetsContext.Consumer>
       );
     }

    renderDemo(demo, idx) {
//      const type = `${idx + 1}. ${demo.name}`;
        const type = idx + '. ' + demo.name;
        return (
            <TouchableHighlight key={type} onPress={() => this.setState({selected: demo.Component})}>
                <View>
                    <Text>{type}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const getInsetStyle = (insets) => ({
  paddingTop: insets.top,
  paddingBottom: insets.bottom,
  paddingLeft: insets.left,
  paddingRight: insets.right,
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    demoContainer: {
        flex: 1,
    },
});