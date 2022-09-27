import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useReducer } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const ACTIONS = {
    ADD: "add",
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET: "reset",
    SUBTRACT: "subtract",
};
const initialState = {
    count: 0,
};

const reducer = (state, action) => {
    console.log("Got request for action", action);
    console.log("STate is currently", state);
    switch (action.type) {
        case "decrement":
            return { count: state.count - 1 };
        case "increment":
            return { count: state.count + 1 };
        case "reset":
            return { count: initialState.count };
        case "add":
            if (!action.payload) throw "Could not find payload in action";
            if (!action.payload.value) throw "Could not find value in payload";
            return { count: state.count + action.payload.value };
        case "subtract":
            if (!action.payload) throw "Could not find payload in action";
            if (!action.payload.value) throw "Could not find value in payload";
            return { count: state.count - action.payload.value };
        default:
            throw `Unknown type: ${action.type}`;
    }
};

const ReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputIncreaseBy = useRef(5);
    const inputDecreaseBy = useRef(5);
    // const [increaseBy, setIncreaseBy] = useState();
    // const [decreaseBy, setDecreaseBy] = useState();
    const onIncreaseSubmit = (e) => {
        e.preventDefault();
        const value = Number(inputIncreaseBy.current.value);
        dispatch({ type: ACTIONS.ADD, payload: { value } });
    };

    const onDecreaseSubmit = (e) => {
        e.preventDefault();
        const value = Number(inputDecreaseBy.current.value);
        dispatch({ type: ACTIONS.SUBTRACT, payload: { value } });
    };

    return (
        <div className="reducer-counter">
            <Button
                variant="warning"
                onClick={() => dispatch({ type: ACTIONS.RESET })}
            >
                Reset
            </Button>
            <Button
                variant="warning"
                onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
            >
                -
            </Button>

            <span className="points">{state.count}</span>

            <Button
                variant="success"
                onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
            >
                +
            </Button>
            <br />
            <Form onSubmit={onIncreaseSubmit}>
                <Form.Group className="mb-3" controlId="formIncrease">
                    <Form.Label>Increase by</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter amount to increase by"
                        ref={inputIncreaseBy}
                    />
                </Form.Group>
                <Button variant="success" type="submit">
                    Increase
                </Button>
            </Form>
            <br />
            <Form onSubmit={onDecreaseSubmit}>
                <Form.Group className="mb-3" controlId="formDecrease">
                    <Form.Label>Decrease by</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter amount to decrease by"
                        ref={inputDecreaseBy}
                    />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Decrease
                </Button>
            </Form>
        </div>
    );
};

export default ReducerCounter;
