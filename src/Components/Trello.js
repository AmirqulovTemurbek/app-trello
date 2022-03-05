import React, {Component} from 'react';

class Trello extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardShow: false,
            boardTitle: "",
            boards: [],
            taskTitles: ""
        }
    }

    render() {

        const changeCardShow = () => {
            this.setState({
                cardShow: !this.state.cardShow
            });
        };

        const changeBoardTitle = (event) => {
            this.setState({
                boardTitle: event.target.value
            })
        }

        const addBoard = () => {
            let newBoards = {
                title: this.state.boardTitle,
                tasks: []
            }

            this.state.boards.push(newBoards);

            this.setState({
                boards: this.state.boards,
                boardTitle: ""
            });
        };

        const changeTaskTitles = (event, index) => {

            this.state.taskTitles[index] = event.target.value

            this.setState({
                taskTitles: this.state.taskTitles
            });
        };

        const addTask = (index) => {

            this.state.boards[index].tasks.push(this.state.taskTitles[index]);

            this.setState({
                boards: this.state.boards
            })
        }
        const changeBoardTitles = (event, index) => {

            this.state.taskTitles[index] = event.target.value

            this.setState({
                taskTitles: this.state.taskTitles
            });
        };


        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-3 mt-3">
                            <button type="button" className="btn btn-success btn-block" onClick={changeCardShow}>Add Board</button>

                            {this.state.cardShow ?
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <textarea className="form-control" value={this.state.boardTitle} onChange={changeBoardTitle}></textarea>

                                        <button type="button" className="btn btn-success d-block ml-auto mt-3" onClick={addBoard}>Add</button>
                                    </div>
                                </div> : ""
                            }
                        </div>

                        <div className="col-9">
                            <div className="row">
                                {this.state.boards.map((item, index) => {
                                    return (
                                        <div className="col-4 mt-3">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="card-body">
                                                    {this.state.boards[index].tasks.map((item, index) => {
                                                        return (
                                                            <div className="task">{item}<span></span></div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="card-footer">
                                                    <textarea className="form-control" placeholder="Type here" onChange={(event) => {changeTaskTitles(event, index)}}></textarea>

                                                    <button type="button" className="btn btn-success ml-auto d-block mt-3" onClick={() => {addTask(index)}}>Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Trello;

// <></> ==> React.Fragment