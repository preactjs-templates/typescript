import style from './style.module.css';

export function Header() {
	return (
		<header class={style.header}>
			<a href="/" class={style.logo}>
				<img src="../../assets/preact-logo-inverse.svg" alt="Preact Logo" height="32" width="32" />
				<h1>Preact CLI</h1>
			</a>
			<nav>
				<a href="/">Home</a>
				<a href="/profile">Me</a>
				<a href="/profile/john">John</a>
			</nav>
		</header>
	)
}
