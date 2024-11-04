function BillOutPut({bill,tip}) {
    return(
        <div>
            <h2>{`your total bill is ${bill+tip} (${bill}  ${tip} tip)` }</h2>
        </div>
    )
}
export  default BillOutPut;