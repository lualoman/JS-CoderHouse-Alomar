import React from 'react'

const UserOrder = ({setUser}) => {

    const updateUser = ( e ) => {
        setUser( user => ({...user, [e.target.name] : e.target.value}) )
    }

    return (
    <div>
        <div>Name: <input onChange={updateUser} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs text-white" name='name' /></div>
        <div>Phone: <input onChange={updateUser} type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs text-white" name='phone' /></div>
        <div>E-mail: <input onChange={updateUser} type="text" placeholder="E-mail" className="input input-bordered w-full max-w-xs text-white" name='email' /></div>
    </div>
    )
}

export default UserOrder