import './timer.css';
export function Timerbtn(props) {

    return (


        <div >
            {(props.status === 0) ?
                <button id="Start" onClick={props.val}>Start</button> : " "

            }
            {(props.status === 1) ?
                <div > 


                    
                    <button id="Start"  onClick={props.stop}>Stop</button>

                    <button id="Start" onClick={props.reset}>Reset</button>
                </div> : " "
            }



            {(props.status === 2) ?
                <div>
                    <button id="Start" onClick={props.resume}>Resume</button>

                    <button id="Start" onClick={props.reset}>Reset</button>
                </div> : " "
            }
        </div>
    );

}
