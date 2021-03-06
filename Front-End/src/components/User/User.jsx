import React, { Fragment } from 'react'
import axios from 'axios'
import '../../assets/styles/user.scss'

class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            last_name: '',
            first_name: '',
            profile: { location: '', phone: '' }

        }
        this._getUser()
        //alert("Al momento de actualizar tus datos personales, por favor introduce tu contraseña o si deseas actualizarla ")
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleInputChangePro = (event) => {
        this.setState({
            profile: { ...this.state.profile, [event.target.name]: event.target.value }
        })

    }

    _onSubmit = async (e) => {
        e.preventDefault()
        try {
            const input = {

                profile: {

                    phone: this.state.profile.phone,
                    location: this.state.profile.location
                },
                username: this.state.username,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password

            }
                
             await fetch(`http://3.16.131.23/api/usuarios/${localStorage.getItem('user_id')}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `token ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(input),
                method: 'PUT',
            })
            

            alert('Datos Actualizados')

        } catch (error) {


            console.log(error)
        }
    }
    _getUser = async () => {
        try {
            let request = await axios.get(`http://3.16.131.23/api/usuarios/${localStorage.getItem('user_id')}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `token ${localStorage.getItem('token')}`
                }

            })
            let { data } = request
            
            this.setState({
                username: data.username,
                email: data.email,
                password: "",
                first_name: data.first_name,
                last_name: data.last_name,
                profile: {
                    location: data.profile.location,
                    phone: data.profile.phone,

                }


            })
            

        } catch (error) {
            console.log(error)

        }
    }
    render() {

        const { username, password, email, last_name, first_name } = this.state
        const { phone, location } = this.state.profile
        return (
            <Fragment>
                <div className="user__content">
                    <div className="side__left">
                        <h2 className="left__username">Perfil de {this.state.username.charAt(0).toUpperCase() + username.slice(1) }</h2>
                        <img className="img__user" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="user"/>
                    </div>


                    <div className="user__form">
                        <form onSubmit={this._onSubmit}  >

                            <div className="username__pass"><label>Usuario</label><label>Contraseña</label></div>
                            <div className="form__input">
                            
                                <input readOnly name="username" type="text" placeholder="Nombre de usuario"
                                    value={username}
                                
                                    onChange={this.handleInputChange}
                                    required
                                />
                                
                                
                                <input name="password" type="password" placeholder="Vieja o Nueva"
                                    value={password}
                                
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>
                            
                    <div className="form__block">
                    <label>Nombre(s)</label>
                                <input name="first_name" type="text" placeholder="Nombre"
                        
                                    value={first_name}
                                    onChange={this.handleInputChange}
                                    required
                                />
                        
                        <label>Apellidos</label><input name="last_name" type="text" placeholder="Apellidos"
                                    value={last_name}
                                    onChange={this.handleInputChange}
                                    required
                        
                                />
                        
                        
                                
                                <label>Email</label>
                        
                                <input name="email" type="email" placeholder="Correo Electronico"
                                    value={email}
                        
                                    onChange={this.handleInputChange}
                                    required
                        
                                />
                        <label>Teléfono</label>
                                <input name="phone" type="text" placeholder="Teléfono"
                                    value={phone}
                                    onChange={this.handleInputChangePro}
                                    required
                        
                                />
                               
                                <label>Ubicación</label>
                                <input name="location" type="text" placeholder="Ubicación"
                                    value={location}
                                    onChange={this.handleInputChangePro}
                                    required
                        
                                />
                        
                    </div>

                            <br />
                            <input type="submit" value="Actualizar Datos"
                                id="btn__user"
                            />
                        </form>
                    </div>
                </div>

            </Fragment>
        )
    }
}
export default User