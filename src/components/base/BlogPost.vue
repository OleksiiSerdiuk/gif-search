<template>
    <div>
        <p v-if="titleBool">
            test
        </p>
        <form v-on:submit.prevent="addNewTodo">
            <label for="new-todo">Добавить задачу</label>
            <input
                v-model="newTodoText"
                id="new-todo"
                placeholder="Например, покормить кота"
            >
            <button>Добавить</button>
        </form>
        <ul>
            <li
                v-for="todo in todos"
                :key="todo.id"
            >
                {{ todo.title }}
                <button v-on:click="removedTodo">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
name: 'blog-post',
    props: {
        'titleBool': {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            newTodoText: '',
            todos: [
                {
                    id: 1,
                    title: 'Do the dishes',
                },
                {
                    id: 2,
                    title: 'Take out the trash',
                },
                {
                    id: 3,
                    title: 'Mow the lawn'
                }
            ],
            nextTodoId: 4,
        }
    },
    mounted: function ()  {
        console.log('title', typeof(this.titleBool));
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
            console.log('title', this.todos);
        },
        removedTodo() {
            this.todos.pop({
                id: this.nextTodoId--,
                title: this.newTodoText
            })
        }
    }
}
</script>
