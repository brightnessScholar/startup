import React from 'react';
import './play.css';
import { Players } from './players';
import { SimonGame } from './simonGame';


export function Play(props) {
  return (
    <main className='bg-secondary'>
      <Players userName={props.userName} />
      <SimonGame userName={props.userName} />
    </main>
  );
}

const [events, setEvent] = React.useState([]);

React.useEffect(() => {
  GameNotifier.addHandler(handleGameEvent);

  return () => {
    GameNotifier.removeHandler(handleGameEvent);
  };
});

function handleGameEvent(event) {
  let newEvents = [event, ...events];
  if (newEvents.length > 10) {
    newEvents = newEvents.slice(1, 10);
  }
  setEvent(newEvents);
}

async function onPressed(buttonPosition) {
  if (allowPlayer) {
    setAllowPlayer(false);
    await buttons.get(buttonPosition).ref.current.press();

    if (sequence[playbackPos].position === buttonPosition) {
      if (playbackPos + 1 === sequence.length) {
        setPlaybackPos(0);
        increaseSequence(sequence);
      } else {
        setPlaybackPos(playbackPos + 1);
        setAllowPlayer(true);
      }
    } else {
      saveScore(sequence.length - 1);
      mistakeSound.play();
      await buttonDance();
    }
  }
}

/*
export function Play() {
  return (
    <main className="bg-secondary">
      <div className="players">
        Player
        <span className="player-name">Mystery player</span>
        <div id="player-messages">
          <div className="event"><span className="player-event">Linus</span> scored 377</div>
          <div className="event"><span className="player-event">Linus</span> started a new game</div>
          <div className="event"><span className="system-event">game</span> connected</div>
        </div>
      </div>

      <div className="game">
        <div className="button-container">
          <button className="button-top-left"></button>
          <button className="button-top-right"></button>
          <button className="button-bottom-left"></button>
          <button className="button-bottom-right"></button>
          <div className="controls center">
            <div className="game-name">Simon<sup>&reg;</sup></div>
            <div className="score center">--</div>
            <button className="btn btn-primary">Reset</button>
          </div>
        </div>
      </div>
    </main>
  );
}

*/