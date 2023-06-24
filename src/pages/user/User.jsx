import React from 'react'
import "./user.css"
import { userRows } from '../../dummyData'
import { PermIdentity } from '@mui/icons-material'


function User() {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <button className='userAddButton'>Create</button>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img src='https://i1.sndcdn.com/artworks-QLH5FyzoNynvfQmg-EICzDA-t500x500.jpg' className='userShowImg'/>
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Anna Becker</span>
              <span className='userShowUserTitle'>Software Engineer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon'/>
              <span className='userShowInfoTitle'>annabecker99</span>
            </div>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon'/>
              <span className='userShowInfoTitle'>10.12.2000</span>
            </div>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon'/>
              <span className='userShowInfoTitle'>+91 9765461324</span>
            </div>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon'/>
              <span className='userShowInfoTitle'>dummyemail@gmail.com</span>
            </div>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon'/>
              <span className='userShowInfoTitle'>3 Shinganshina Road, Eldia</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'></div>
      </div>
    </div>
  )
}

export default User
