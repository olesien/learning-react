import { useState } from "react";
import React from "react";

const Salary = () => {
    const [salary, setSalary] = useState(10);
    const changeSalary = (amount) => {
        if (salary < 5) {
            setSalary(5);
            return;
        }

        setSalary(salary + amount);
    };
    return (
        <>
            <p>Salary per hour: {salary} &euro;</p>

            {salary < 10 && (
                <div className="alert alert-warning">
                    You might want to get a second job?
                </div>
            )}

            <div className="buttons">
                <div className="mb-1">
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={() => changeSalary(1)}
                    >
                        Raise 1 &euro; 🤑
                    </button>

                    <button
                        className="btn btn-warning btn-lg"
                        onClick={() => changeSalary(-1)}
                    >
                        Decrease 1 &euro; 😢
                    </button>
                </div>

                <div className="mb-1">
                    <button
                        className="btn btn-success btn-lg"
                        onClick={() => changeSalary(5)}
                    >
                        Raise 5 &euro; 🤑🤑🤑
                    </button>

                    <button
                        className="btn btn-danger btn-lg"
                        onClick={() => changeSalary(-5)}
                    >
                        Decrease 5 &euro; 😢😢😢
                    </button>
                </div>
            </div>
        </>
    );
};

export default Salary;
