
import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        jipa: state.user

    }
}

export default connect(mapStateToProps)(Dashboard)
