/* Gratefully copied from https://github.com/brentvatne/react-native-animated-demo-tinder */
/* Then copied here and customized for this project's needs: found here https://github.com/meteor-factory/react-native-tinder-swipe-cards/blob/master/SwipeCards.js*/
'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
  Dimensions,
  Image
} from 'react-native';

import clamp from 'clamp';

import Defaults from './Defaults.js';

const viewport = Dimensions.get('window')
const SWIPE_THRESHOLD = 120;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  yup: {
    borderColor: 'green',
    backgroundColor: 'white',
    borderWidth: 2,
    position: 'absolute',
    padding: 20,
    bottom: 20,
    borderRadius: 5,
    right: 0,
  },
  rightSwipeText: {
    fontSize: 16,
    color: 'green',
  },
  upSwipeText: {
    fontSize: 16,
    color: 'blue',
  },
  upSwipe: {
    borderColor: 'blue',
    backgroundColor: 'white',
    borderWidth: 2,
    position: 'absolute',
    padding: 20,
    bottom: 20,
    borderRadius: 5,
    right: 0,
  },
  downSwipe: {
    borderColor: 'purple',
    borderWidth: 2,
    position: 'absolute',
    padding: 20,
    bottom: 20,
    borderRadius: 5,
    left: 0,
  },
  downSwipeText: {
    fontSize: 16,
    color: 'purple',
  },
  leftSwipe: {
    borderColor: 'red',
    backgroundColor: 'white',
    borderWidth: 2,
    position: 'absolute',
    bottom: 20,
    padding: 20,
    borderRadius: 5,
    left: 0,
  },
  leftSwipeText: {
    fontSize: 16,
    color: 'red',
  },
});

//Components could be unloaded and loaded and we will loose the users currentIndex, we can persist it here.
let currentIndex = {};
let guid = 0;

export default class SwipeCards extends Component {

  static propTypes = {
    cards: React.PropTypes.array,
    cardKey: React.PropTypes.string,
    upSwipeAction: React.PropTypes.bool,
    loop: React.PropTypes.bool,
    onLoop: React.PropTypes.func,
    allowGestureTermination: React.PropTypes.bool,
    stack: React.PropTypes.bool,
    stackGuid: React.PropTypes.string,
    stackDepth: React.PropTypes.number,
    stackOffsetX: React.PropTypes.number,
    stackOffsetY: React.PropTypes.number,
    renderNoMoreCards: React.PropTypes.func,
    showYup: React.PropTypes.bool,
    showupSwipe: React.PropTypes.bool,
    showNope: React.PropTypes.bool,
    handleSwipeRight: React.PropTypes.func,
    handleSwipeUp: React.PropTypes.func,
    handleSwipeLeft: React.PropTypes.func,
    rightSwipeText: React.PropTypes.string,
    upSwipeText: React.PropTypes.string,
    noText: React.PropTypes.string,
    renderCard: React.PropTypes.func,
    cardRemoved: React.PropTypes.func,
    dragY: React.PropTypes.bool,
    smoothTransition: React.PropTypes.bool
  };

  static defaultProps = {
    cards: [],
    cardKey: 'key',
    upSwipeAction: false,
    loop: false,
    onLoop: () => null,
    allowGestureTermination: true,
    stack: false,
    stackDepth: 5,
    stackOffsetX: 25,
    stackOffsetY: 0,
    showYup: true,
    showupSwipe: true,
    showNope: true,
    handleSwipeDown: (card) => null,
    handleSwipeRight: (card) => null,
    handleSwipeUp: (card) => null,
    handleSwipeLeft: (card) => null,
    leftSwipeText: "Nope (0)",
    leftSwipeText: "A little (1)",
    upSwipeText: "Maybe (2)",
    rightSwipeText: "Yup! (3)",
    onDragStart: () => {},
    onDragRelease: () => {},
    cardRemoved: (ix) => null,
    renderCard: (card) => null,
    style: styles.container,
    dragY: true,
    smoothTransition: false
  };

  constructor(props) {
    super(props);

    //Use a persistent variable to track currentIndex instead of a local one.
    this.guid = this.props.guid || guid++;
    if (!currentIndex[this.guid]) currentIndex[this.guid] = 0;

    this.state = {
      pan: new Animated.ValueXY(0),
      enter: new Animated.Value(0.5),
      cards: [].concat(this.props.cards),
      card: this.props.cards[currentIndex[this.guid]],
    };

    this.lastX = 0;
    this.lastY = 0;

    this.cardAnimation = null;

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponderCapture: (e, gestureState) => {
        this.props.onDragStart()
        this.lastX = gestureState.moveX;
        this.lastY = gestureState.moveY;
        return true;
      },
      onMoveShouldSetPanResponderCapture: (e, gestureState) => {
        if (Math.abs(gestureState.dx) < Math.abs(gestureState.dy)) return false;
        if ((gestureState.dx === 0) && (gestureState.dy === 0))   return false;
        return (Math.abs(this.lastX - gestureState.moveX) > 5 || Math.abs(this.lastY - gestureState.moveY) > 5);
      },

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({ x: this.state.pan.x._value, y: this.state.pan.y._value });
        this.state.pan.setValue({ x: 0, y: 0 });
      },

      onPanResponderTerminationRequest: (evt, gestureState) => this.props.allowGestureTermination,

      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.props.dragY ? this.state.pan.y : 0 },
      ]),

      onPanResponderRelease: (e, {vx, vy, dx, dy}) => {
        this.props.onDragRelease()
        this.state.pan.flattenOffset();
        let velocity;
        if (Math.abs(dx) <= 5 && Math.abs(dy) <= 5)   //meaning the gesture did not cover any distance
        {
          // this.props.onClickHandler(this.state.card)
        }

        if (vx > 0) {
          velocity = clamp(vx, 3, 5);
        } else if (vx < 0) {
          velocity = clamp(vx * -1, 3, 5) * -1;
        } else {
          velocity = dx < 0 ? -3 : 3;
        }

        const hasSwipedHorizontally = Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD;
        const hasSwipedVertically = Math.abs(this.state.pan.y._value) > SWIPE_THRESHOLD;
        console.log(this.state.pan.y._value, 'num', SWIPE_THRESHOLD, 'thresh');
        if (hasSwipedHorizontally || hasSwipedVertically) {

          let cancelled = false;

          const hasMovedRight = hasSwipedHorizontally && this.state.pan.x._value > 0;
          const hasMovedLeft = hasSwipedHorizontally && this.state.pan.x._value < 0;
          const hasMovedUp = hasSwipedVertically && this.state.pan.y._value < 0;
          const hasMovedDown = hasSwipedVertically && this.state.pan.y_value > 0;

          console.log(hasMovedUp, 'has it moved up or nah')

          if (hasMovedRight) {
            cancelled = this.props.handleSwipeRight(this.state.card);

          } else if (hasMovedLeft) {
            console.log('moved left', cancelled, this.props.handleSwipeLeft(this.state.card));
            cancelled = this.props.handleSwipeLeft(this.state.card);

          } else if (hasMovedUp && this.props.handleSwipeUp) {
            console.log('moved up', cancelled, this.props.handleSwipeLeft(this.state.card));
            cancelled = this.props.handleSwipeUp(this.state.card);

          } else if (hasMovedDown && this.props.handleSwipeDown) {
            cancelled = this.props.handleSwipeDown(this.state.card);

          } else {
            cancelled = true
          }

          //Yup or nope was cancelled, return the card to normal.
          if (cancelled) {
            this._resetPan();
            return;
          };

          this.props.cardRemoved(currentIndex[this.guid]);

          if (this.props.smoothTransition) {
            this._advanceState();
          } else {
            this.cardAnimation = Animated.decay(this.state.pan, {
              velocity: { x: velocity, y: vy },
              deceleration: 0.98
            });
            this.cardAnimation.start(status => {
              if (status.finished) this._advanceState();
              else this._resetState();

              this.cardAnimation = null;
            }
            );
          }

        } else {
          this._resetPan();
        }
      }
    });
  }

  _forceLeftSwipe() {
    this.cardAnimation = Animated.timing(this.state.pan, {
      toValue: { x: -500, y: 0 },
    }).start(status => {
      if (status.finished) this._advanceState();
      else this._resetState();

      this.cardAnimation = null;
    }
      );
    this.props.cardRemoved(currentIndex[this.guid]);
  }

  _forceUpSwipe() {
    this.cardAnimation = Animated.timing(this.state.pan, {
      toValue: { x: 0, y: 500 },
    }).start(status => {
      if (status.finished) this._advanceState();
      else this._resetState();

      this.cardAnimation = null;
    }
      );
    this.props.cardRemoved(currentIndex[this.guid]);
  }

  _forceRightSwipe() {
    this.cardAnimation = Animated.timing(this.state.pan, {
      toValue: { x: 500, y: 0 },
    }).start(status => {
      if (status.finished) this._advanceState();
      else this._resetState();

      this.cardAnimation = null;
    }
      );
    this.props.cardRemoved(currentIndex[this.guid]);
  }

  _forceDownSwipe() {
    this.cardAnimation = Animated.timing(this.state.pan, {
      toValue: { x: 0, y: -500 },
    }).start(status => {
      if (status.finished) this._advanceState();
      else this._resetState();

      this.cardAnimation = null;
    }
      );
    this.props.cardRemoved(currentIndex[this.guid]);
  }

  _goToNextCard() {
    currentIndex[this.guid]++;

    // Checks to see if last card.
    // If props.loop=true, will start again from the first card.
    if (currentIndex[this.guid] > this.state.cards.length - 1 && this.props.loop) {
      this.props.onLoop();
      currentIndex[this.guid] = 0;
    }

    this.setState({
      card: this.state.cards[currentIndex[this.guid]]
    });
  }

  _goToPrevCard() {
    this.state.pan.setValue({ x: 0, y: 0 });
    this.state.enter.setValue(0);
    this._animateEntrance();

    currentIndex[this.guid]--;

    if (currentIndex[this.guid] < 0) {
      currentIndex[this.guid] = 0;
    }

    this.setState({
      card: this.state.cards[currentIndex[this.guid]]
    });
  }

  componentDidMount() {
    this._animateEntrance();
  }

  _animateEntrance() {
    Animated.spring(
      this.state.enter,
      { toValue: 1, friction: 8 }
    ).start();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cards !== this.props.cards) {

      if (this.cardAnimation) {
        this.cardAnimation.stop();
        this.cardAnimation = null;
      }

      currentIndex[this.guid] = 0;
      this.setState({
        cards: [].concat(nextProps.cards),
        card: nextProps.cards[0]
      });
    }
  }

  _resetPan() {
    Animated.spring(this.state.pan, {
      toValue: { x: 0, y: 0 },
      friction: 4
    }).start();
  }

  _resetState() {
    this.state.pan.setValue({ x: 0, y: 0 });
    this.state.enter.setValue(0);
    this._animateEntrance();
  }

  _advanceState() {
    this.state.pan.setValue({ x: 0, y: 0 });
    this.state.enter.setValue(0);
    this._animateEntrance();
    this._goToNextCard();
  }

  /**
   * Returns current card object
   */
  getCurrentCard() {
      return this.state.cards[currentIndex[this.guid]];
  }

  renderNoMoreCards() {
    if (this.props.renderNoMoreCards) {
      return this.props.renderNoMoreCards();
    }

    return <Defaults.NoMoreCards />;
  }

  /**
   * Renders the cards as a stack with props.stackDepth cards deep.
   */
  renderStack() {
    if (!this.state.card) {
      return this.renderNoMoreCards();
    }

    //Get the next stack of cards to render.
    let cards = this.state.cards.slice(currentIndex[this.guid], currentIndex[this.guid] + this.props.stackDepth).reverse();

    return cards.map((card, i) => {

      let offsetX = this.props.stackOffsetX * cards.length - i * this.props.stackOffsetX;
      let lastOffsetX = offsetX + this.props.stackOffsetX;

      let offsetY = this.props.stackOffsetY * cards.length - i * this.props.stackOffsetY;
      let lastOffsetY = offsetY + this.props.stackOffsetY;

      let opacity = 0.25 + (0.75 / cards.length) * (i + 1);
      let lastOpacity = 0.25 + (0.75 / cards.length) * i;

      let scale = 0.85 + (0.15 / cards.length) * (i + 1);
      let lastScale = 0.85 + (0.15 / cards.length) * i;

      let style = {
        position: 'absolute',
        top: this.state.enter.interpolate({ inputRange: [0, 1], outputRange: [lastOffsetY, offsetY] }),
        left: this.state.enter.interpolate({ inputRange: [0, 1], outputRange: [lastOffsetX, offsetX] }),
        opacity: this.props.smoothTransition ? 1 : this.state.enter.interpolate({ inputRange: [0, 1], outputRange: [lastOpacity, opacity] }),
        transform: [{ scale: this.state.enter.interpolate({ inputRange: [0, 1], outputRange: [lastScale, scale] }) }],
        elevation: i * 10
      };

      //Is this the top card?  If so animate it and hook up the pan handlers.
      if (i + 1 === cards.length) {
        let {pan} = this.state;
        let [translateX, translateY] = [pan.x, pan.y];

        let rotate = pan.x.interpolate({ inputRange: [-200, 0, 200], outputRange: ["-30deg", "0deg", "30deg"] });
        let opacity = this.props.smoothTransition ? 1 : pan.x.interpolate({ inputRange: [-200, 0, 200], outputRange: [0.5, 1, 0.5] });

        let animatedCardStyles = {
          ...style,
          transform: [
            { translateX: translateX },
            { translateY: translateY },
            { rotate: rotate },
            { scale: this.state.enter.interpolate({ inputRange: [0, 1], outputRange: [lastScale, scale] }) }
          ]
        };

        return (
          <Animated.View
              key={card[this.props.cardKey]}
              style={[styles.card, animatedCardStyles]}
              {... this._panResponder.panHandlers}
            >
              {this.props.renderCard(this.state.card)}
          </Animated.View>
        )
      }

      return <Animated.View key={card[this.props.cardKey]} style={style}>{this.props.renderCard(card)}</Animated.View>;
    });
  }

  renderCard() {
    if (!this.state.card) {
      return this.renderNoMoreCards();
    }

    let {pan, enter} = this.state;
    let [translateX, translateY] = [pan.x, pan.y];

    let rotate = pan.x.interpolate({ inputRange: [-200, 0, 200], outputRange: ["-30deg", "0deg", "30deg"] });
    let opacity = pan.x.interpolate({ inputRange: [-200, 0, 200], outputRange: [0.5, 1, 0.5] });

    let scale = enter;

    let animatedCardStyles = { transform: [{ translateX }, { translateY }, { rotate }, { scale }], opacity };

    return <Animated.View key={"top"} style={[styles.card, animatedCardStyles]} {... this._panResponder.panHandlers}>
      {this.props.renderCard(this.state.card)}
    </Animated.View>;
  }


  renderRightSwipe() {
    let {pan} = this.state;

    let yupOpacity = pan.x.interpolate({ inputRange: [(SWIPE_THRESHOLD/2), SWIPE_THRESHOLD], outputRange: [0, 1], extrapolate: 'clamp' });
    let yupScale = pan.x.interpolate({ inputRange: [0, SWIPE_THRESHOLD], outputRange: [0.5, 1], extrapolate: 'clamp' });
    let animatedYupStyles = { transform: [{ scale: yupScale }], opacity: yupOpacity };

    if (this.props.renderRightSwipe) {
      return this.props.renderRightSwipe(pan);
    }

    if (this.props.showRightSwipe) {
      return <Animated.View style={[styles.yup, animatedYupStyles]}>
        <Text style={styles.rightSwipeText}>{this.props.rightSwipeText}</Text>
      </Animated.View>;
    }

    return null;
  }

  renderUpSwipe() {
    let {pan} = this.state;

    let upSwipeOpacity = pan.y.interpolate({ inputRange: [-SWIPE_THRESHOLD, -(SWIPE_THRESHOLD/2)], outputRange: [1, 0], extrapolate: 'clamp' });
    let upSwipeScale = pan.x.interpolate({ inputRange: [0, SWIPE_THRESHOLD - 1], outputRange: [1, 0.5], extrapolate: 'clamp' });
    let animatedUpSwipeStyles = { transform: [{ scale: upSwipeScale }], opacity: upSwipeOpacity };

    if (this.props.renderUpSwipe) {
      return this.props.renderUpSwipe(pan);
    }

    return <Animated.View style={[styles.upSwipe, animatedUpSwipeStyles]}>
      <Text style={styles.upSwipeText}>{this.props.upSwipeText}</Text>
    </Animated.View>;

    return null;
  }

  renderDownSwipe() {
    let {pan} = this.state;

    let downSwipeOpacity = pan.x.interpolate({ inputRange: [(-SWIPE_THRESHOLD/2), SWIPE_THRESHOLD], outputRange: [1, 0], extrapolate: 'clamp' });
    let downSwipeScale = pan.x.interpolate({ inputRange: [-SWIPE_THRESHOLD, 0], outputRange: [0.5, 1], extrapolate: 'clamp' });
    let animatedDownSwipeStyles = { transform: [{ scale: downSwipeScale }], opacity: downSwipeOpacity };

    if (this.props.renderDownSwipe) {
      return this.props.renderDownSwipe(pan);
    }

    if (this.props.showDownSwipe) {
      return <Animated.View style={[styles.downSwipe, animatedDownSwipeStyles]}>
        <Text style={styles.downSwipeText}>{this.props.downSwipeText}</Text>
      </Animated.View>;
    }

    return null;
  }


  renderLeftSwipe() {
    let {pan} = this.state;

    let nopeOpacity = pan.x.interpolate({ inputRange: [-SWIPE_THRESHOLD, - (SWIPE_THRESHOLD/2)], outputRange: [1, 0], extrapolate: 'clamp' });
    let nopeScale = pan.x.interpolate({ inputRange: [-SWIPE_THRESHOLD, 0], outputRange: [1, 0], extrapolate: 'clamp' });
    let animatedNopeStyles = { transform: [{ scale: nopeScale }], opacity: nopeOpacity };

    if (this.props.renderLeftSwipe) {
      return this.props.renderLeftSwipe(pan);
    }

    if (this.props.showNope) {
      return <Animated.View style={[styles.leftSwipe, animatedNopeStyles]}>
        <Text style={styles.leftSwipeText}>{this.props.leftSwipeText}</Text>
      </Animated.View>;
    }

    return null;
  }

  renderCardCount() {
    return (
      <Text>{ this.state.cards.length } cards remaining </Text>
    )
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.props.stack ? this.renderStack() : this.renderCard() }
        { this.renderLeftSwipe() }
        { this.renderUpSwipe() }
        { this.renderRightSwipe() }
        { this.renderCardCount() }
      </View>
    );
  }
}