import React from 'react'
import axios from 'axios'
import "../../assets/styles/details.scss"

class Detail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id:"",
            name_event: "No tienes eventos registrados por el momento",
            street: "Tu corazon",
            col: "Vida",
            cp: "44520",
            references: "A la vuela con tu cara",
            day1: "1",
            day2: "",
            day3: "",
            hour: "",
            date:""

        }
        this.getEvent()
    }

    async getDate() {

        try {



            let request = await axios.get(`http://3.16.131.23/api/eventos/${this.state.id}/votos/resultados/`, {
                headers: {
                    "Content-type": "application/json",
                },

            })
            const { data } = request
            data.map((item) => (
                this.setState({
                    date: item.final_date
                })
            ))
        } catch (error) {

            console.log(error)
        }
    }


    async getEvent() {
        try {
            let request = await axios.get('http://18.223.168.22/api/eventos/', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `token ${localStorage.getItem('token')}`
                }

            })

            const { data } = request
            
            if (data.length) {
                data.map((item) => (
                    this.setState({
                        id:item.id,
                        name_event: item.name_event,
                        street: item.street,
                        col: item.col,
                        cp: item.cp,
                        references: item.references,
                        day1: item.day1,
                        day2: item.day2,
                        day3: item.day3,
                        hour: item.hour,
                        vote:true
                    })
                ))
                    this.getDate()
            } else {
                alert("Carnal, no tienes eventos. Create uno e invitemos a todos los que puedas")
            }





        } catch (error) {
            console.log(error)

        }
    }


    _onSubmitVote = async (e)=>{
        e.preventDefault()
        let input={
            id:"",
            vote:""

        }

        this.day=e.target.name
        switch(this.day){
        case "day1":{
            input={
                id:this.state.id,
                vote:this.state.day1
            }
            break;
        }
        case "day2":{
            input={
                id:this.state.id,
                vote:this.state.day2
            }
            break;
        }
        case "day3":{
            input={
                id:this.state.id,
                vote:this.state.day3
            }
            break;
        }
        default:{
            console.log("No envío nada")
        }
    }

        try {

            let request = await fetch(`http://18.223.168.22/api/eventos/${this.state.id}/votos/`, {
                body: JSON.stringify(input),
                method: 'POST',
                headers: {
                  "Content-type": "application/json",
                  "Authorization": `token ${localStorage.getItem('token')}`
                },
        
              })
        
        if(request.ok){
            alert("Gracias por tu voto.")
           this.setState({vote:false})
           
        }
         
            
        } catch (error) {
            
        }

    }
    




    render() {
        return (
            <div >


                <div className="container__event">
                    <span className="event__title"><p>{this.state.name_event}</p></span>


                    <div className="event__details">
                        <div className="event__place">
        
                            <h2 className="event__h2">Lugar:</h2>
                            <span><p><strong>Calle:</strong> {this.state.street}<br /><strong>Colonia:</strong>{this.state.col}<br /><strong> Código Postal: </strong>{this.state.cp} </p>
                            </span><br />
                        </div>

                        <div className="event__references">
                            <span><h2 className="event__h2">Referencias</h2>
                                {this.state.references}</span> <br /> <br />

                        </div>

                    </div>
                    <div className="event__date"><h2 className="event__h2">Votación de Fechas</h2>
                        <span><p>Tenemos 3 fechas tentativas para la carnitas, vota por la mejor para ti. </p></span>
                        <h3>Hora: {this.state.hour}</h3>
                        <div style={ this.state.vote ? {}: {display:'none'}}>
                            <ul className="ul__date">
                                <li>Fecha 1: 
                                <input onClick={this._onSubmitVote} name="day1" className="day__vote" type="button" value={this.state.day1} />
                                
                                </li>
                                <li>Fecha 2: 
                                <input onClick={this._onSubmitVote} name="day2" className="day__vote" type="button" value={this.state.day2} />
                                
                                </li>
                                <li>Fecha 3:
                                <input onClick={this._onSubmitVote} name="day3" className="day__vote" type="button" value={this.state.day3} />

                                </li>

                             

                            </ul>
                            <h3>Fecha Final: {this.state.date}</h3>
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }


}
export default Detail