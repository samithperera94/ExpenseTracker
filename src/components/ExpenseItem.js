import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
const ExpenseItem = (props) => {
    // const expenseDate = new Date(2022,6,11);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 302.50;
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;