function SelectPercentage({percentage,setPercentage,children}) {
    return(
        <div>
            {children}
            <select value={percentage} onChange={e =>{
                setPercentage(Number(e.target.value));
            }}>
                <option value={"10"}>10%</option>
                <option value={"15"}>15%</option>
                <option value={"20"}>20%</option>
            </select>
        </div>
    )
}
export default SelectPercentage;