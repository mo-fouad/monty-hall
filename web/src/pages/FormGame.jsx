import React, {useEffect, useState} from 'react'
import Alert from "../components/Alert";

function FormGame() {

    const [siNumbers, setSimNumbers] = useState(0);
    const [changeDoors, setChangeDoors] = useState(false);
    const [result, setResult] = useState({
        'GamesWon': 0, 'GamesLost': 0
    })

    const [showAlert, setShowAlert] = useState(false);

    const handNumChanges = (e) => {
        let val = e.target.value;
        const reg = /^\d*[1-9]\d*$/;

        if (reg.test(val) || val === "") {
            setSimNumbers(+val);
        }
    }

    const handelChangeDoors = (e) => {
        setChangeDoors(e.target.checked);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (siNumbers === "" || siNumbers === 0) {
            showAlertFun()
        } else {
            // posting Data
            const rawResponse = await fetch('http://localhost:4000/play', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "siNumbers": siNumbers,
                    "changeDoors": changeDoors,
                }),
            });

            const content = await rawResponse.json();
            setResult({...content})

        }
    };

    const showAlertFun = () => {
        setShowAlert(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false)
        }, 3000)
    }, [showAlert]);

    return (
        <div className="container">
            <h3>Welcome to Monty Hall Game Simulator</h3>
            <hr/>
            <form className="monty-form" onSubmit={e => handleSubmit(e)}>

                <div className="monty-form__item">
                    <label htmlFor="NumOfSims">Numbers Of Simulations</label>
                    <input id="NumOfSims"
                           type="text"
                           value={siNumbers}
                           onChange={e => handNumChanges(e)}
                           required
                    />
                    <small className="hint">only positive numbers accepted</small>
                </div>

                <div className="monty-form__item">
                    <label htmlFor="doorChange">Change Door ?!</label>
                    <input id="doorChange"
                           type="checkbox"
                           value={changeDoors}
                           onChange={e => handelChangeDoors(e)}
                    />
                </div>

                <div className="monty-form__item">
                    <button className="monty-form__button" type="submit">Run Simulation</button>
                </div>

            </form>

            <hr/>

            {/*todo : Add Loding*/}

            <div className="monty-result">
                <h4>Games Won : {result.GamesWon}</h4>
                <h4>Games Lost : {result.GamesLost}</h4>
            </div>


            <Alert showAlert={showAlert} alertClass="alert-red"
                   textAlert="Number of simulations must be at least 1 !"/>
        </div>
    );
}

export default FormGame
