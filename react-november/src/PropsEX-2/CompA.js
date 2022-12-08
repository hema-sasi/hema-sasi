import CompB from './CompB-cls'
let CompA =( )=>{
    let ename="Rahul Gandhi"
    let salary=45000
    return<div>
        <h1>Component A</h1>
        <hr/>
{/* <CompB  one={"GM"} emp_Name={ename} e_sal={salary}/> */}
<CompB  movie={"RRR"}/>
    </div> 
   
}
export default CompA