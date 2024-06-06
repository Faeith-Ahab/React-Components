import React from "react";

class ApplicationForm extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        alert("You have successfully submitted your application");
    }

    render() {
        return (
            <div className="ApplicationForm">
                <h1>Application Form</h1>

                <p ><i>All files are required</i></p>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
<pre> </pre>
                    <div>
                        <label htmlFor="phone">Contact:</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                        <small>Format: 123-456-7890</small>
                    </div>
<pre> </pre>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
<pre> </pre>
                    <button type="submit">Apply</button>
                </form>
            </div>
        );
    }
}

export default ApplicationForm;