import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShowForm(false)
    };

    const addNewExpenseHandler = () => {

        // setShowForm((prevState) => {
        //     return !prevState;
        // });
        setShowForm(true)
    };

    const cancelFormHandler = () => {
        setShowForm(false)
    }
    return (
        <div className='new-expense'>

            {(showForm == true) ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={cancelFormHandler} /> :
                <button className="new-expense__add-new" onClick={addNewExpenseHandler}>Add New Expense</button>}

        </div>
    );
}

export default NewExpense;