import { Component, h } from "preact";
import * as style from "./style.css";

export default class Home extends Component {
    public render() {
        return (
            <div class={style.home}>
                <h1>Home</h1>
                <p>This is the Home component.</p>
            </div>
        );
    }
}
