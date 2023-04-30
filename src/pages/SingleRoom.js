import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'


export default class SingleRoom extends Component {
  // state={
  //   slug: []
  // };
  // constructor(props){
  //   super(props);
  //   console.log(this.props);
  //   // this.state = {
  //   //   slug:this.props.match.params.slug,
  //   //   defaultBcg
  //   // }
  // }
  componentDidMount(){
    console.log(this.context);
    // let rooms = this.formatData(items);
    // let featuredRooms = rooms.filter(room => room.featured === true);  // add the room into the featuredRooms array if the feature is true
    // this.setState({
    //     rooms, 
    //     featuredRooms,
    //     sortedRooms: rooms, 
    //     loading:false
    // })
  }
  static contextType = RoomContext;
  render() {
    // const {getRoom} = this.context;
    // const room = getRoom(this.state.slug);
    // console.log(room);
    return (
      <div>hello from SingleRoom page</div>
    )
  }
}
