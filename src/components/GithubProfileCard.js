import React, { Component, Fragment } from 'react'


class GithubProfileCard extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        let {name, avatar_url, bio, html_url} = this.props.profile;
        return(
            <Fragment>
              <div className='card'>
                  <img src={avatar_url} alt='' className='img-fluid' />
                  <div className='card-body'>
                   <h4 className='card-title'>{name}</h4>
                     <p>{bio}</p>
                     <a href={html_url} target="_blank" className='btn btn-success btn-sm'>Profile</a>
                  </div>
                 </div>          
                   </Fragment>
        )
    }
}

export default GithubProfileCard;