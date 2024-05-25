import './index.css'
const Login=()=>{

    const onSubmitUserDetails=(event)=>{
        event.preventDefault();
        console.log("Function runnign ....");

        let url='https://apis.ccbp.in/login';
       
    }
    return(
        <div className="form-cont">
            <form onSubmit={onSubmitUserDetails}>
           <h1 className='form-heading'>bitHireNow</h1><br/>
            <label htmlFor='user-input'> UserName</label>
            <br/>
                <input type='text' id='user-input'></input>
                <br/>

            <label htmlFor='user-password' > Password</label>
            <br/>
            <input type='text' id='user-password' ></input>
        <br/>
        <br/>

            <button className='btn btn-outline-dark submit-btn'> Login</button>
            </form>
        </div>
    
    );
  }
  

export default Login