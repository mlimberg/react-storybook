import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

const mapStateToProps = state => ({
  toDos: state.ToDos
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps);