import React from 'react'

import { useState } from 'react';
import Bunptton from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert'
import './SideNav.css';

import { Link } from 'react-router-dom';
import {HiPencil } from 'react-icons/hi';
import {BiSend } from 'react-icons/bi';
import {RiDraftLine } from 'react-icons/ri';


function SideBar() {





  return (
    <div className='head'>
         <Link to="/" className='btn btn-primary m-4 mt-5'> <HiPencil/> Compose Mail</Link>
            <ul className='an'>
                <Link to='/sent' className='link'> <BiSend className='me-2 mb-1'/>Sent</Link>
            </ul>
            <ul className='an'>
            <Link to='/drafts' className='link'><RiDraftLine className='me-2 mb-1'/>Draft</Link>
            </ul>
            
        


    </div>
  )
}

export default SideBar