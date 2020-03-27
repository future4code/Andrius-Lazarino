import React from "react"
import { connect } from "react-redux"
import { fetchDetails } from "../../actions"

const token = window.localStorage.getItem("token")

class TripDetailsPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(id) {
        if (token === null) {
            this.props.goToLogin()
        } else {
            this.props.fetchDetails(this.props.id, token)

        }
    }

    render() {
        console.log(this.props.detailTrip)
        return (
            <div>
                <div>
                    <p>{}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        id: state.trips.id,
        detailTrip: state.trips.detailTrip
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDetails: (id, token) => dispatch(fetchDetails(id, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);