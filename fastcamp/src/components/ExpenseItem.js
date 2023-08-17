import React, { Component } from 'react' //rce 입력하면 자동으로 class형 component 기본 타입이 출력된다.
import './ExpenseItem.css';
import {MdEdit, MdDelete} from 'react-icons/md'

export class ExpenseItem extends Component {
  render() {
    return (
      <li className='item'>
        <div className='info'>
            <span className='expense'>학원등록</span>
            <span className='amount'>1000 원</span>
        </div>
        <div>
            <button className='edit-btn'><MdEdit /></button>
            <button className='clear-btn'><MdDelete /></button>
        </div>

      </li>
    )
  }
}

export default ExpenseItem
