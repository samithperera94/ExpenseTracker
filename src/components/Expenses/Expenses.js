import { useState } from 'react';
import './Expenses.css';
// import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
const Expenses = (props) => {

    const [filterVlaue, setFilterValue] = useState('2020');

    const onSelectHandler = (filteredValue) => {
        setFilterValue(filteredValue);
    }

    const filteredExpenses = props.expenses.filter((expense) => {

        return (expense.date.getFullYear().toString() === filterVlaue);
    });





    return (
        <div>
            <Card className="expenses">

                {/* this is a controlled component         */}
                <ExpenseFilter selected={filterVlaue} onSelect={onSelectHandler} />
                <ExpensesList items={filteredExpenses} />

            </Card>
        </div>


    );
}

export default Expenses;