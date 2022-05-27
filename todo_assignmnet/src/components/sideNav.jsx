import React, { Component } from 'react'

class SideNav extends Component {
  
  sideSubGroups = [
    {
      title: 'Example',
      link:'Source'
    },
    {
      title: 'React + Backbone.js',
      link:'Demo, Source'
    },
    {
      title: 'Scala.js + React',
      link:'Demo, Source'
    },
    {
      title: 'TypeScript + React',
      link:'Demo, Source'
    },
    {
      title: 'React + Alt',
      link:'Demo, Source'
    },
  ];

  render() {
    return (
      <div className='sideNav'>
        <div className="introHead">
          <h1>React</h1>
          {
            this.sideSubGroups.map(ele=>{
              return(
                <div className="subGroups">
                  <h2>{ele.title}</h2>
                  <h3>{ele.link}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default SideNav;