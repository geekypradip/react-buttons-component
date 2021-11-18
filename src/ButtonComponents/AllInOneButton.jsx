import './button.css'
function AllInOneButton(props) {
    return ( 
        <button className={props.style}>{props.label}</button>
     );
}

export default AllInOneButton;