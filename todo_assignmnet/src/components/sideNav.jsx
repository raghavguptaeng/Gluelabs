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
        <hr />
        <div className="para">
          <blockquote>
            <p>React is a JavaScript library for creating user interfaces. Its core principles are declarative code, efficiency, and flexibility. Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes.</p>
          </blockquote>
        </div>
      </div>
    )
  }
}
export default SideNav;