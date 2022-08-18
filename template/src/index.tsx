import { LocationProvider, Router, Route } from 'preact-iso/router';
import { default as lazy, ErrorBoundary } from 'preact-iso/lazy';

import { Header } from './components/header';

// Asynchronous, code-splitted:
const Home = lazy(() => import('./routes/home/index'));
const Profile = lazy(() => import('./routes/profile/index'));

import './style/index.css';

export default function App() {
	return (
		<LocationProvider>
			<div id="app">
				<Header />
				<main>
					<ErrorBoundary>
						<Router>
							<Route path="/" component={Home} />
							<Route path="/profile/" component={Profile} user="me" />
							<Route path="/profile/:user" component={Profile} />
						</Router>
					</ErrorBoundary>
				</main>
            </div>
        </LocationProvider>
    );
}
