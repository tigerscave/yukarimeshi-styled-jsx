import React from "react"

const LoginForm = () => {
  return (
    <div>
      <div>
        <div class="main">
          <p class="login">LOGIN</p>
          <form>
            <p class="char-mail-address">Mail Address</p>
            <textarea class="mail-address"></textarea>
            <p class="char-password">Password</p>
            <textarea class="password"></textarea>
            <br />
            <input type="submit" value="LOGIN" class="login-button" />
            </form>
          </div>
        </div>
      <style jsx>{`
        .main{
          margin-left: 300px;
          margin-right: 300px;
        }

        .login{
          font-size: 18px;
          font-weight: bold;
          padding-top: 30px;
          padding-bottom: 10px;
        }

        .char-mail-address{
          padding-top: 5px;
          padding-bottom: 10px;
        }

        .mail-address{
          border-radius: 10px;
          width: 300px;
          height: 50px;
        }

        .char-password{
          padding-top: 30px;
          padding-bottom: 10px;
        }

        .password{
          border-radius: 10px;
          width: 300px;
          height: 50px;
        }

        .login-button{
          border-radius: 30px;
          margin-top: 30px;
          width: 100px;
          height: 50px;
          background-color: #696969;
          color: #ffffff;
          font-size: 15px;
        }

      `}</style>
    </div>
  )
}

export default LoginForm
