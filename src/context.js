import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();
// provider allows all componnets in the components to access it
// consumer access the info

export default class RoomProvider extends Component {
state={
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
};

// getData
componentDidMount(){
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);  // add the room into the featuredRooms array if the feature is true
    this.setState({
        rooms, 
        featuredRooms,
        sortedRooms: rooms, 
        loading:false
    })
}
//iterate the array
formatData(array){
    let tempItems = array.map(item =>{
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);
        let room = {...item.fields, images, id}; // copy the properties from the fields object
        return room;
    });
    return tempItems;
}

getRoom = slug =>{
  let tempRooms = [...this.state.rooms];
  const room = tempRooms.find(room_each=>room_each.slug === slug);
  return room;
}

  render() {
    return (
      <RoomContext.Provider value={{...this.state, getRoom:this.getRoom}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export{RoomProvider,RoomConsumer,RoomContext};