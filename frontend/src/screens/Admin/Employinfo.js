



const Employinfo = () => {

    const [role, setrole] = useState("Admin");

    setrole(props.role);

    return(
        <div>
        { role === "Admin" &&(
            <Employinfo/>
        )}
        </div>
    );
}

export default Employinfo;