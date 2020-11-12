import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends React.Component {
 constructor () {
  super ();
  this.state = {
   enteremail: "",
   enterpasword: "",
   erroremail: "",
   errorpasword: "",
  };
 }
 /**
  * створити форму авторизацію <form>
  *  2 поля емаіл пароль
  *  додоти перевірку щоб можна булло воодити тіки емайл якшо виводиш помилку погуглик regext email js
  *  додоти перевірку щоб можна булло воодити тіки пароль якшо виводиш помилку погуглик regext password js
  *  додати обробник на форму onSubmit і вивести в консолі зачення (якщо не вийде то обговоримо при зустрічі)
  * **/

  takeAmail = (e) => {
   const { value } = e.target;
   const emailRegex = /\w+@\w+\.\w+/;
   if (emailRegex.test(value)) {
     this.setState({ enteremail: value, erroremail: "Your email corect" })
   } else {
     this.setState({ enteremail: value, erroremail: "Enter corect email" });
   }
  };

  takePasword = (e) => {
    const { value } = e.target;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/;
    if (passwordRegex.test(value)) {
      this.setState({ enterpasword: value, errorpasword: "Pasword corect" })
    } else {
      this.setState({ enterpasword: value, errorpasword: " the letter, capital letter and number min 8 char" });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { errorpasword, erroremail, enterpasword, enteremail } = this.state;
    if (erroremail === "Your email corect" & errorpasword === "Pasword corect") {
      console.log(` your email = ${enteremail} your password = ${enterpasword} `)
    }
  };

  render() {
    const { errorpasword, erroremail, enterpasword, enteremail } = this.state;
    return (
      <div className={'conteiner'}>
        <form className={'PaswordEmail'} onSubmit={this.onSubmit}>
          <p> Plaase enter email and pasword </p>
          <input className={' Email'} value={enteremail} onChange={this.takeAmail} placeholder={"enter email"}>
          </input>
          <span/> {erroremail}
          <br/>
          <input className={"pasword"} value={enterpasword} onChange={this.takePasword} placeholder={"enter pasword"}
          />
          <span/> {errorpasword}
          <br/>
          <button type="submit" name={"submit"} className={"btn btn-primary"}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default App;