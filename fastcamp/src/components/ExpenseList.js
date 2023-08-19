import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import {MdDelete} from 'react-icons/md'

const ExpenseList = ({handleDelete, expenses, handleEdit, clearItems}) => {
    console.log(expenses);
    return (
      <>
      <ul className='List'>
        {/* ExpenseItem */}
        {expenses.map(expense => {
            return (
                <ExpenseItem  
                expense={expense}
                key={expense.id}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                />
            )
        })}
      </ul>
      {expenses.length > 0 && (
        <button className='btn' onClick={clearItems}>
            목록 지우기
            <MdDelete className='btn-icon'/>
        </button>
      )}
      </>
    )
      };

export default ExpenseList
