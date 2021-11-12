
const imageNote = {
    props: ['data'],
    template: `
    <section class="note image-note">
        <h5>{{note.info.title}}</h5>
        <h6>{{note.info.txt}}</h6>
        <img :src="note.imgUrl/>
        <nav><button @click="deleteNote(note.id)">X</button>
            <button @click="editNote(note.id)">EDIT</button></nav>
    </section>
    `,
    data() {
        return {
            txt: '',
        };
    },
    methods: {
        reportVal() {
            this.$emit('setInput', this.txt);
        }
    }
};
const toDoNote = {
    props: ['data'],
    template: `
    <section class="note todo-note">
        <h5>{{note.info.title}}</h5>
        <h6>{{note.info.txt}}</h6>
                <select v-model="selectedOpt" @blur="reportVal">
                    <option v-for="opt in data.opts">{{opt}}</option>
                </select>
                <nav><button @click="deleteNote(note.id)">X</button>
                <button @click="editNote(note.id)">EDIT</button></nav>
        </section>
    `,
    data() {
        return {
            selectedOpt: '',
        };
    },
    methods: {
        reportVal() {
            this.$emit('setInput', this.selectedOpt);
        }
    }
};
const linkNote = {
    props: ['data'],
    template: `
        <section class="note link-note">
            <h5>{{note.info.title}}</h5>
            <h6>{{note.info.txt}}</h6>
            <nav><button @click="deleteNote(note.id)">X</button>
                <button @click="editNote(note.id)">EDIT</button></nav>
        </section>
    `,
    data() {
        return {
            range: { min: this.data.min, max: this.data.max }
        };
    },
    methods: {
        reportVal() {
            this.$emit('setInput', this.range);
        }
    }
};
const textNote = {
    props: ['data'],
    template: `
    <section class="note text-note">
        <h5>{{note.info.title}}</h5>
        <h6>{{note.info.txt}}</h6>
        <nav><button @click="deleteNote(note.id)">X</button>
            <button @click="editNote(note.id)">EDIT</button></nav>
    </section>
    `,
    data() {
        return {
            date: new Date()
        };
    },
    methods: {
        deleteNote(id) {
            if(confirm('Are you sure?')){
                notesService.remove(id).then(() => {
                    eventBus.$emit("query");
                });
        }
    },
        editNote(id) {

        },


    }
};

const videoNote = {
    props: ['data'],
    template: `
        <div class="row">
            <label>
                {{data.label}}
                <input type="text" v-model="txt" @blur="reportVal" />
            </label>
        </div>
    `,
    data() {
        return {
            txt: '',
        };
    },
    methods: {
        reportVal() {
            this.$emit('setInput', this.txt);
        }
    }
};
const mapNote = {
    props: ['data'],
    template: `
        <div class="row">
            <label>
                {{data.label}}
                <select v-model="selectedOpt" @blur="reportVal">
                    <option v-for="opt in data.opts">{{opt}}</option>
                </select>
            </label>
        </div>
    `,
    data() {
        return {
            selectedOpt: '',
        };
    },
    methods: {
        reportVal() {
            this.$emit('setInput', this.selectedOpt);
        }
    }
};
const canvasNote = {
    props: ['data'],
    template: `
        <div class="row">
            <label>
                {{data.label}}
                <input type="number" v-model.number="range.min" /> -
                <input type="number" v-model.number="range.max" @blur="reportVal" />
            </label>
        </div>
    `,
    data() {
        return {
            range: { min: this.data.min, max: this.data.max }
        };
    },
    methods: {
        reportVal() {
            this.$emit('setInput', this.range);
        }
    }
};
const dateBox = {
    props: ['data'],
    template: `
        <div class="row">
            <label>
                {{data.label}}
                <input type="date" v-model="date" @change="reportVal" /> -
            </label>
        </div>
    `,
    data() {
        return {
            date: new Date()
        };
    },
    methods: {
        reportVal() {
            this.$emit('setInput', this.date);
        }
    }
};