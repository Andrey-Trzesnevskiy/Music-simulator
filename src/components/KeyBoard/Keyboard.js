import React, {Component} from "react";
import './keyboard-style.css';
 
export default class KeyBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNote: ''
        };
    }

    whiteNotes = [
        {
            value: 'C'
        },
        {
            value: 'D'
        },
        {
            value: 'E'
        },
        {
            value: 'F'
        },
        {
            value: 'G'
        },
        {
            value: 'A'
        },
        {
            value: 'B'
        }
    ];

    blackNotes = [
        {
            value: 'C#/Db'
        },
        {
            value: 'D#/Eb'
        },
        {
            value: null,
        },
        {
            value: 'F#/Gb'
        },
        {
            value: 'G#/Ab'
        },
        {
            value: 'A#/Bb'
        }
    ];

    render() {
        return (
            <div className="keyboard">
                Selected note: {this.state.selectedNote}
                <div className="octave">
                    <div className="white-notes">
                        {this.whiteNoteElements}
                    </div>
                    <div className="black-notes">
                        {this.blackNoteElements}
                    </div>
                </div>
            </div>
        )
    }

    noteClick = (value) => {
        console.log(value);      
        this.setState({
            selectedNote: value
        });
    }

    get whiteNoteElements() {
        return this.whiteNotes.map(({value}) => <div className="white-note" onClick={() => this.noteClick(value)}  key={value}></div>);
    }

    get blackNoteElements() {
        return this.blackNotes.map(({value}) => value ? <div className="black-note" onClick={() => this.noteClick(value)} key={value}></div> : <div className="empty" key={value}></div>);
    }



}
