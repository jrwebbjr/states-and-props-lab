import Employeelistitem from "./Employeelistitem";
import employeesArray from "../data";

const employees = employeesArray.map((ele, idx) => {
  return <Employeelistitem {...ele} key={idx} />;
});

export default function Employeelist(props) {
  return (
      <>
        {employeesArray.map((ele, idx) => {
            return (
                 <Employeelistitem {...ele} key={idx} playShow={props.playShow} />
            )
        })}
      </>
  )
}
