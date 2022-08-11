import { Route, Router } from 'preact-router';

import { Header } from './components/header';

// Code-splitting is automated for `routes` directory
import Home from './routes/home';
import Profile from './routes/profile';

import './style/index.css';

export default function App() {
    return (
        <div id="app">
            <Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/profile/" component={Profile} user="me" />
					<Route path="/profile/:user" component={Profile} />
				</Router>
			</main>
        </div>
    );
}
