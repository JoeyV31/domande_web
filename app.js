const App = () => {
    const handleButtonClick = () => {
      const name = document.getElementById("nameInput").value;
      alert(`Hello, ${name}!`);
    };
  
    return (
      <div className="container">
        <img src="bg.jpg" alt="Company Logo" className="logo" />
        <input
          type="text"
          id="nameInput"
          placeholder="Enter your name"
          className="textbox"
        />
        <button className="button" onClick={handleButtonClick}>
          Submit
        </button>
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));
  