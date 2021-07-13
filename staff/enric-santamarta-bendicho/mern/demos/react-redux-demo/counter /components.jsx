const { connect } = ReactRedux

const IncrDecr = (props) => {

    return <div>
        Counter:
            {props.number}
        <div>
            <button onClick={() => store.dispatch(increment())}>Increment</button>
            <button onClick={() => store.dispatch(decrement())}>Decrement</button>
        </div>
    </div>
}

function mapStateToProps(state) {
    return {
        number: state.mycounter
    }
}

const IncrDecrConnected = connect(mapStateToProps)(IncrDecr)