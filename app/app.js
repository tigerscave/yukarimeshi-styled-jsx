import React from 'react'
import NavBar from "./components/nav-bar";
import LoginForm from "./components/login-form";

const App = () => {
	return (
		<div>
			<NavBar />
			<LoginForm />
			<style jsx>{`
				p {
					color: red;
				}
				`}</style>
		</div>)
}

export default App
