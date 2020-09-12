import React,  {Fragment} from 'react'
import GithubProfile from './GithubProfile'
import Axios from 'axios';
import { clientSecret, clientId } from './Githubcredential';
import GithubRepos from './GithubRepos';

class GithubApi extends React.Component{
    constructor(){
        super()
this.state={
    username: '',
    profile: null,
    repos : null
}
    }
// Two way Data Binding
    updateInput =(e)=>{

        this.setState({
            ...this.state, 
            username: e.target.value
        })

      
    }



         // form Submission
searchUser = (e)=>{
    e.preventDefault();
    this.searchProfile();
   this.searchRepos();
}
// Search a profile
searchProfile =()=>{
Axios.get(`https://api.github.com/users/${this.state.username}?clientId=${clientId}&clientSecret=${clientSecret}`).then((posRes)=>{
console.log(posRes.data);

this.setState({
    profile : posRes.data
})
}).catch((errRes)=>{
    console.log(errRes);
})
}


searchRepos =()=>{
    Axios.get(`https://api.github.com/users/${this.state.username}/repos?clientId=${clientId}&clientSecret=${clientSecret}`).then((posRes)=>{
    console.log(posRes.data);
    
    this.setState({
        repos : posRes.data
    })
    }).catch((errRes)=>{
        console.log(errRes);
    })
    }
    

    render(){
        return(
            <Fragment>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
           <div className='container mt-2'>
               <div className='row'>
             <div className='col'>
             <div className='card'>
             <div className='card-header bg-secondary text-white'>
         <h3>Github User Search</h3>
         </div>
         <div className='card-body'>
         <form className='form-inline' onSubmit={this.searchUser}>
             <div className='form-group'>
            <input type='text' size='40' 
            className='form-control'
             placeholder='User Name' 
             value={this.state.username}
             onChange={this.updateInput}
             />
             </div>
             <div>
                 <input type='submit'   className='btn btn-secondary btn-sm' value='search' />
             </div>
         </form>
             </div>
         </div>
             </div>
               </div>
    
          </div>      
          <div className='container mt-3'>
              <div className='row'>
              <div className='col'>
                  {
                      this.state.profile ?
                                       <GithubProfile profile={this.state.profile} /> : null

                  }
              </div>
              </div> 
              </div>    


              <div className='container mt-3'>
              <div className='row'>
              <div className='col'>
                  {
                      this.state.repos ?
                                       <GithubRepos repos={this.state.repos} /> : null

                  }
              </div>
              </div> 
              </div>    
         </Fragment>
        )
    }
}

export default GithubApi; 
