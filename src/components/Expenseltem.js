import './Expenseltem.css'

function Expenseltem(props) {
    const expenseDate = new Date(2022, 7, 11);
    const expenseTitle = 'Car lnsurance'
    const expenseAmount = 294.42069;
    return (
        <div className="expense-item">
            <div> {props.date} </div>
            <div className="expense-item__">
                <h2> {props.title} </h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    );
}

export default Expenseltem