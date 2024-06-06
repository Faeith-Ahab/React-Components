import React from 'react';



class Essay extends React.Component {
  render() {
    return (
      <div className="essay">
        <h1>Paragraph for {this.props.name}</h1>
        <p>In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) <br/>
            is a placeholder text commonly used to demonstrate the visual form of a document <br/>
            or a typeface without relying on meaningful content. <br/>
            Lorem ipsum may be used as a placeholder before the final copy is available. <br/>
            It is also used to temporarily replace text in a process called greeking,<br/>
             which allows designers to consider the form of a webpage or publication,<br/>
              without the meaning of the text influencing the design.</p>
      </div>
    );
  }
} 

export default Essay;
