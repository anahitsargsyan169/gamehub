import React from "react"
import styles from "./Tic-Tac-Toe.module.css"
import songPencil from "../Songs/pencil.mp3"

class Game extends React.Component {
    state = {
        TableTTT:[
            null, null, null,
            null, null, null,
            null, null, null
        ],
        xIsNext: true,
        gameStarted: false,
        Song: new Audio(songPencil)
    }

PlayerMove = (i) =>{
    if(this.state.xIsNext === true){
        if(this.state.TableTTT[i] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[i]) {
                return;
            }
            newTableTTT[i] = 'X';
            this.setState({
                TableTTT: newTableTTT,
                xIsNext: false,
                gameStarted: true,
            });
            this.state.Song.pause()
            this.state.Song.load()
            this.state.Song.play()
        }
        setTimeout(()=>{
            this.BotMove()
        },300)
    }
}

BotMove = () =>{
    const random = Math.floor(Math.random()*this.state.TableTTT.length)
    const process = this.state.TableTTT.filter( e => e === null )
    const table = this.state.TableTTT
    if(this.state.xIsNext === false){
        if(table[0] === 'O' && table[4] === 'O' && table[8] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[8]) {
                return;
            }
            table[8] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[2] === 'O' && table[4] === 'O' && table[6] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[6]) {
                return;
            }
            table[6] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[6] === 'O' && table[4] === 'O' && table[2] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[2]) {
                return;
            }
            table[2] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[8] === 'O' && table[4] === 'O' && table[0] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[0]) {
                return;
            }
            table[0] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[1] === 'O' && table[4] === 'O' && table[7] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[7]) {
                return;
            }
            table[7] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[7] === 'O' && table[4] === 'O' && table[1] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[1]) {
                return;
            }
            table[1] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[3] === 'O' && table[4] === 'O' && table[5] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[5]) {
                return;
            }
            table[5] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[5] === 'O' && table[4] === 'O' && table[3] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[3]) {
                return;
            }
            table[3] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[0] === 'O' && table[1] === 'O' && table[2] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[2]) {
                return;
            }
            table[2] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[2] === 'O' && table[1] === 'O' && table[0] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[0]) {
                return;
            }
            table[0] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[2] === 'O' && table[5] === 'O' && table[8] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[8]) {
                return;
            }
            table[8] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[8] === 'O' && table[5] === 'O' && table[2] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[2]) {
                return;
            }
            table[2] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[7] === 'O' && table[8] === 'O' && table[6] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[6]) {
                return;
            }
            table[6] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[7] === 'O' && table[6] === 'O' && table[8] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[8]) {
                return;
            }
            table[8] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[6] === 'O' && table[3] === 'O' && table[0] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[0]) {
                return;
            }
            table[0] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[0] === 'O' && table[2] === 'O' && table[1] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[1]) {
                return;
            }
            table[1] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[2] === 'O' && table[8] === 'O' && table[5] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[5]) {
                return;
            }
            table[5] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[8] === 'O' && table[6] === 'O' && table[7] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[7]) {
                return;
            }
            table[7] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[6] === 'O' && table[0] === 'O' && table[3] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[3]) {
                return;
            }
            table[3] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[0] === 'O' && table[8] === 'O' && table[4] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[4]) {
                return;
            }
            table[4] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[2] === 'O' && table[6] === 'O' && table[4] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[4]) {
                return;
            }
            table[4] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[1] === 'O' && table[7] === 'O' && table[4] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[4]) {
                return;
            }
            table[4] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[3] === 'O' && table[5] === 'O' && table[4] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[4]) {
                return;
            }
            table[4] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[0] === 'X' && table[4] === 'X' && table[8] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[8]) {
                return;
            }
            table[8] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[2] === 'X' && table[4] === 'X' && table[6] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[6]) {
                return;
            }
            table[6] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[6] === 'X' && table[4] === 'X' && table[2] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[2]) {
                return;
            }
            table[2] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[8] === 'X' && table[4] === 'X' && table[0] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[0]) {
                return;
            }
            table[0] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[1] === 'X' && table[4] === 'X' && table[7] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[7]) {
                return;
            }
            table[7] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[7] === 'X' && table[4] === 'X' && table[1] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[1]) {
                return;
            }
            table[1] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[3] === 'X' && table[4] === 'X' && table[5] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[5]) {
                return;
            }
            table[5] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[5] === 'X' && table[4] === 'X' && table[3] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[3]) {
                return;
            }
            table[3] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[0] === 'X' && table[1] === 'X' && table[2] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[2]) {
                return;
            }
            table[2] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[2] === 'X' && table[1] === 'X' && table[0] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[0]) {
                return;
            }
            table[0] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[2] === 'X' && table[5] === 'X' && table[8] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[8]) {
                return;
            }
            table[8] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[8] === 'X' && table[5] === 'X' && table[2] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[2]) {
                return;
            }
            table[2] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[7] === 'X' && table[8] === 'X' && table[6] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[6]) {
                return;
            }
            table[6] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[7] === 'X' && table[6] === 'X' && table[8] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[8]) {
                return;
            }
            table[8] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[6] === 'X' && table[3] === 'X' && table[0] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[0]) {
                return;
            }
            table[0] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[0] === 'X' && table[2] === 'X' && table[1] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[1]) {
                return;
            }
            table[1] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[2] === 'X' && table[8] === 'X' && table[5] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[5]) {
                return;
            }
            table[5] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[8] === 'X' && table[6] === 'X' && table[7] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[7]) {
                return;
            }
            table[7] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[6] === 'X' && table[0] === 'X' && table[3] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[3]) {
                return;
            }
            table[3] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[0] === 'X' && table[8] === 'X' && table[4] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[4]) {
                return;
            }
            table[4] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[2] === 'X' && table[6] === 'X' && table[4] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[4]) {
                return;
            }
            table[4] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[1] === 'X' && table[7] === 'X' && table[4] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[4]) {
                return;
            }
            table[4] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else if(table[3] === 'X' && table[5] === 'X' && table[4] === null){
            const newTableTTT = this.state.TableTTT.slice();
            if (calculateWinner(newTableTTT) || newTableTTT[4]) {
                return;
            }
            table[4] = 'O'
            this.setState({
                xIsNext: true,
            });
        }
        else{
            if(this.state.TableTTT[random] === null && process !== undefined && this.state.xIsNext === false){
                const newTableTTT = this.state.TableTTT.slice();
                if (calculateWinner(newTableTTT) || newTableTTT[random]) {
                    return;
                }
                newTableTTT[random] = 'O'
                this.setState({
                    TableTTT: newTableTTT,
                    xIsNext: true,
                });
            }else{
                setTimeout(()=>{
                    this.BotMove()
                },100)
            }
        }
    }
}

renderSquare(i) {
    return (
      <td
        className={styles.inner}
        value={this.state.TableTTT[i]}
        onClick={() => this.PlayerMove(i)}>
        <span style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: this.state.TableTTT[i] === 'X' ? "green" : null || this.state.TableTTT[i] === 'O' ? "red" : null
        }}>
        {this.state.TableTTT[i]}
        </span></td>
    )
}

Replay = () =>{
    const Clear = [
                    null, null, null, 
                    null, null, null, 
                    null, null, null
                  ]
    this.setState({
        TableTTT: Clear,
        xIsNext: true,
        gameStarted: false,
    })
}


render(){
    const winner = calculateWinner(this.state.TableTTT);
    const Process = this.state.TableTTT.find( e => e === null )
    let status = <h3 className={styles.status}>Start</h3>;
    if (winner) {
      status = <h3 className={styles.status}>Winner: <span style={{color: this.state.xIsNext ? 'red' : 'green'}}>{winner}</span></h3>
    }else{
        if(Process !== undefined){
            status = <h3 className={styles.status}>Move: <span style={{color: this.state.xIsNext ? 'green' : 'red'}}>{this.state.xIsNext ? 'X' : 'O'}</span></h3>
        }else{
            status = <h3 className={styles.status} style={{color: "orangered"}}>Standoff</h3>
        }
    }

    return(
        <>
            <h2 className={styles.h2}>Game: Tic-Tac-Toe</h2>
            {status}
                <div id={styles.game}>
                    <div className={styles.table}>
                        <table>
                            <tbody>
                                <tr>
                                    {this.renderSquare(0)}
                                    {this.renderSquare(1)}
                                    {this.renderSquare(2)}
                                </tr>
                                <tr>
                                    {this.renderSquare(3)}
                                    {this.renderSquare(4)}
                                    {this.renderSquare(5)}
                                </tr>
                                <tr>
                                    {this.renderSquare(6)}
                                    {this.renderSquare(7)}
                                    {this.renderSquare(8)}
                                </tr>
                            </tbody>
                        </table>
                    </div> 
                    <button disabled={!this.state.gameStarted} className={this.state.gameStarted ? `${styles.againActive}` : `${styles.againUnActive}`} onClick={() => this.Replay()}>Play again</button>
                </div>
            </>
        )
    }

}

export default Game

function calculateWinner(TableTTT) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (TableTTT[a] && TableTTT[a] === TableTTT[b] && TableTTT[a] === TableTTT[c]) {
        return TableTTT[a];
      }
    }
    return null;
  }