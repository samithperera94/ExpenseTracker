import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, seEnteredDate] = useState('');

    //use only one state instead of using three state slices
    // const [userInputs,setUserInputs] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = (event) => {
        // setUserInputs({
        //     ...userInputs,
        //     enteredTitle:event.target.value
        // });

        //above is not a good practice because if we are depending on the previous state, use this method

        // setUserInputs((prevState) => { //safer way
        //     return {
        //         ...prevState, enteredTitle: event.target.value
        //     };
        // });

        //use only one state instead of using three state slices
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        seEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        //two way binding
        setEnteredTitle('');
        setEnteredAmount('');
        seEnteredDate('');
        // console.warn(expenseData);

        props.onSaveExpenseData(expenseData)

    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2022-01-01" max="2022.12.30" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancelForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;