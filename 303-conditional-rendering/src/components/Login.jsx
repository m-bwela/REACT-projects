import React from "react";
import Input from "./Input"

function loginPage() {
    return (
        <form className="form">
        <Input 
        type= "text"
        placeholder= "Username"
        />
        <Input 
        type= "password"
        placeholder= "Password"
        />
        <button type="submit">Login</button>
        </form>
    );
}

export default loginPage;