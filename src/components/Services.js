import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"

import Title from "./Title"

export default class Services extends Component {
  state={
    services:[
        {
            icon:<FaCocktail/>,
            title:"free cocktails",
            info:'this is the info!'
        },
        {
            icon:<FaHiking/>,
            title:"endliess hikings",
            info:'this is the info!'
        },
        {
            icon:<FaShuttleVan/>,
            title:"free shuttle",
            info:'this is the info!'
        },
        {
            icon:<FaBeer/>,
            title:"strongest beer",
            info:'this is the info!'
        }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="services"/>
        <div className="services-center">
          {this.state.services.map((item,index) => {return <article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>}
          )}
        </div>
      </section>
    )
  }
}
