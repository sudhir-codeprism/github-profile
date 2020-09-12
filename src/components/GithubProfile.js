import React, { Component } from 'react'
import GithubProfileCard from './GithubProfileCard'
import GithubProfileDetails from './GithubProfileDetails'

class GithubProfile extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
               <div className='container'>
                   <div className='row'>
                <div className='col-md-3'>
                    {
                        Object.keys(this.props).length !==0 ?
                       <GithubProfileCard profile={this.props.profile}/> : null        
                    }
               
                </div>
                <div className='col-md-9'>
               
               {
                        Object.keys(this.props).length !==0 ?
                       <GithubProfileDetails profile={this.props.profile}/> : null        
                    }
                </div>
                   </div>

               </div>
            </div>
        )
    }
}

export default GithubProfile;