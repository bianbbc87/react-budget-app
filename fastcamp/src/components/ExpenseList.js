import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import {MdDelete} from 'react-icons/md'

const ExpenseList = ({handleDelete, initialExpenses}) => {
    console.log(initialExpenses);
    return (
      <>
      <ul className='List'>
        {/* ExpenseItem */}
        {initialExpenses.map(_expense => {
            return (
                <ExpenseItem  
                expense={_expense}
                key={_expense.id}
                handleDelete={handleDelete}
                />
            )
        })}
      </ul>
        <button className='btn'>
            목록 지우기
            <MdDelete className='btn-icon'/>
        </button>
      </>
    )
      };

export default ExpenseList
