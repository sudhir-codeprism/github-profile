import React, { Component, Fragment } from 'react'


class GithubRepos extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        
        return(
            <Fragment>
    <div className='card'>
    <div className='card-header bg-success text-white'>
        <h2>Github Repositories</h2>
        </div>
        <div className='card-body'>
        <ul className='list-group'>
   {
       this.props.repos.map((repo)=>{
    return (
        <li className='list-group-item bg-light'>
   <a href={repo.html_url} target="_blank">{repo.name}</a>
   <span className='badge badge-success mx-5'>{repo.stargazers_count}Star</span>
   <span className='badge badge-warning mx-5'>{repo.watchers_count}Watches</span>
   </li>
    )
       })
   }
        </ul>
    </div>
    </div>
            </Fragment>
        )
    }
}

export default GithubRepos;