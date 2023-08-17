import React, { Component } from 'react' //rce 입력하면 자동으로 class형 component 기본 타입이 출력된다.
import './ExpenseItem.css';
import {MdEdit, MdDelete} from 'react-icons/md'

export class ExpenseItem extends Component {
  render() {
    return (
      <li className='item'>
        <div className='info'>
            <span className='expense'>{this.props.expense.charge}</span>
            <span className='amount'>{this.props.expense.amount}</span>
        </div>
        <div>
            <button className='edit-btn'><MdEdit /></button>
            <button className='clear-btn' onClick={() => 
            this.props.handleDelete(this.props.expense.id)}>
                <MdDelete />
                </button>
        </div>

      </li>
    )
  }
}

export default ExpenseItem
