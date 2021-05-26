var app = new Vue({
    el: '#app',
    data: {
        salute: 'Hello Vue!',
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        seen: !true,
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ],
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ],
        todos2: [
            { text: 'Learn JavaScript 2' },
            { text: 'Learn Vue 2' },
            { text: 'Build something awesome 2' }
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})