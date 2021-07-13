const { StrictMode } = React
const { createStore, applyMiddleware } = Redux
const { Provider } = ReactRedux
const { render } = ReactDOM

const App = () => (
    < div >
        < IncrDecrConnected />
    </div >
)

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(<StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
</StrictMode>, document.getElementById('root'))
