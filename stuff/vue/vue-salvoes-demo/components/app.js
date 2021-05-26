const App = {
    el: '#app',
    template: `<main>
        <template v-if="gameView" v-for="row in rows">
            <div v-for="column in columns" >
                {{ row }}{{ column }}
                <template v-if="isSalvo(row + column)">
                    YES
                </template>
            </div>
        </template>
    </main>`,
    data() {
        return {
            rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            gameView: null,
            feedback: null
        }
    },
    methods: {
        isSalvo(location) {
            return isSalvoInLocation(this.gameView.salvoes, location)
        }
    },
    created() {
        retrieveGameView(1, (error, gameView) => {
            if (error) return this.feedback = error.message

            this.gameView = gameView
        })
    }
}