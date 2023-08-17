import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import "../index.css";
import {MdDelete} from 'react-icons/md'

export class ExpenseList extends Component {
  render() {
    return (
      <>
      <ul className='List'>
        <ExpenseItem />
      </ul>
        <button className='btn'>
            목록 지우기
            <MdDelete className='btn-icon'/>
        </button>
      </>
    )
  }
}

export default ExpenseList