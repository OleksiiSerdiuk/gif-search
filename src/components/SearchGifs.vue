<template>
    <b-container>
        <b-card bg-variant="info" text-variant="white" header="Gif Searcher" class="text-center">
            <b-card-text>Find you favorite gifs</b-card-text>
        </b-card>
        <b-input-group class="mt-5">
            <b-form-input v-model="searchTerm" placeholder="Enter your name"></b-form-input>
            <b-input-group-append>
                <base-button theme="info" @click='getGifs()'>Search</base-button>
            </b-input-group-append>
        </b-input-group>

        <div class="gif-container mt-4">
            <ul>
                <li v-for="gif in gifs" :key="gif.id">
                    <img :src="gif">
                </li>
            </ul>
        </div>
        <base-button size="lg" theme="info" @click='showMore()' class="m-auto d-flex">Show More</base-button>
        <p>{{ error }}</p>
    </b-container>
</template>

<script>
export default {
    name: 'search-gifs',
    data() {
        return {
            searchTerm: "",
            gifs: [],
            apiKey: "P8OxZ5mQFHsmPtzyuMwOv51nEABwyL0U",
            searchEndPoint: "https://api.giphy.com/v1/gifs/search?",
            limit: 5,
            error: ''
        };
    },
    methods: {
        getGifs() {
            let url = `${this.searchEndPoint}&api_key=${this.apiKey}&q=${
                this.searchTerm
            }&limit=${this.limit}`;
            fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    this.buildGifs(json);
                })
                .catch(err => {
                    console.log(err);
                });
            this.error = '';
            console.log(this.searchTerm);
        },
        buildGifs(json) {
            this.gifs = json.data
                .map(gif => gif.id)
                .map(gifId => {
                    return `https://media.giphy.com/media/${gifId}/giphy.gif`;
            });
        },
        showMore() {
            if(this.gifs.length === 5) {
                this.getGifs(this.limit += 5);
            } else if (this && this.gifs.length === 0) {
                return this.error = 'Need add Text and click on `Search` button!';
            }
        }
    },
}
</script>

<style>
.gif-container ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    padding: 0;
    grid-gap: 15px;
    text-decoration: none;
    list-style: none;
}

ul li {
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    width: 100%;
    height: auto;
    max-width: 300px;
}
</style>
