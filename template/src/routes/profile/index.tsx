import { h } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";
import * as style from "./style.css";

interface Props {
    user: string;
}

interface State {
    time: number;
    count: number;
}

const Profile: preact.FunctionalComponent<Props> = props => {
    const { user } = props;
    const [state, setState] = useState<State>({ time: Date.now(), count: 10 });

    let timer: number;

    // gets called when this route is navigated to
    useEffect(() => {
        timer = window.setInterval(
            () => setState({ ...state, time: Date.now() }),
            1000
        );

        // gets called just before navigating away from the route
        return () => {
            clearInterval(timer);
        };
    }, []);

    // update the current time
    const increment = useCallback(() => {
        setState({ ...state, count: state.count + 1 });
    }, [state.count]);

    return (
        <div class={style.profile}>
            <h1>Profile: {user}</h1>
            <p>This is the user profile for a user named {user}.</p>

            <div>Current time: {new Date(state.time).toLocaleString()}</div>

            <p>
                <button onClick={increment}>Click Me</button> Clicked{" "}
                {state.count} times.
            </p>
        </div>
    );
};

export default Profile;
