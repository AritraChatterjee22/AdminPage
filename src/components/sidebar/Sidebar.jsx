import { Assessment, CurrencyRupee, LineStyle, LocalMall, Mail, PersonOutline, RateReview, ReportGmailerrorred, Textsms, Timeline, TrendingUp, WorkOutline } from '@mui/icons-material'
import React from 'react'
import "./sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
      <div className='sidebarMenu'>
        <h3 className='sidebarTitle'>Dashboard</h3>
        <ul className='sidebarList'>
          <li className='sidebarListItem active'>
            <LineStyle className='sidebarIcon'/>
            Home
          </li>
          <li className='sidebarListItem'>
            <Timeline className='sidebarIcon'/>
            Analytics
          </li>
          <li className='sidebarListItem'>
            <TrendingUp className='sidebarIcon'/>
            Sales
          </li>
        </ul>
      </div>
      <div className='sidebarMenu'>
        <h3 className='sidebarTitle'>Quick Menu</h3>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <PersonOutline className='sidebarIcon'/>
            Users
          </li>
          <li className='sidebarListItem'>
            <LocalMall className='sidebarIcon'/>
            Products
          </li>
          <li className='sidebarListItem'>
            <CurrencyRupee className='sidebarIcon'/>
            Transactions
          </li>
          <li className='sidebarListItem'>
            <Assessment className='sidebarIcon'/>
            Reports
          </li>
        </ul>
      </div>
      <div className='sidebarMenu'>
        <h3 className='sidebarTitle'>Notifications</h3>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <Mail className='sidebarIcon'/>
            Mail
          </li>
          <li className='sidebarListItem'>
            <RateReview className='sidebarIcon'/>
            Feedback
          </li>
          <li className='sidebarListItem'>
            <Textsms className='sidebarIcon'/>
            Messages
          </li>
        </ul>
      </div>
      <div className='sidebarMenu'>
        <h3 className='sidebarTitle'>Staff</h3>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <WorkOutline className='sidebarIcon'/>
            Manage
          </li>
          <li className='sidebarListItem'>
            <Timeline className='sidebarIcon'/>
            Analytics
          </li>
          <li className='sidebarListItem'>
            <ReportGmailerrorred className='sidebarIcon'/>
            Reports
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
