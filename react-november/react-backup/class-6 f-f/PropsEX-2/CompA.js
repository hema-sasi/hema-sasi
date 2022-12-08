import CompB from './CompB'
let CompA =( )=>{
    let ename="Rahul Gandhi"
    return<div>
        <h1>Component A</h1>
        <hr/>
        <CompB  one={"GM"} emp_Name={ename}/>
    </div>
}
export default CompA