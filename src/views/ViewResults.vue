<template>
    <b-container>
        <b-card bg-variant="info" text-variant="white" header="Gif Searcher" class="text-center">
            <b-card-text>Find you favorite gifs</b-card-text>
        </b-card>

        <b-input-group class="mt-5">
            <base-input v-model="searchTerm" placeholder="Enter your name" />
            <b-input-group-append>
                <base-button theme="info" @click='getGifs()'>Search</base-button>
            </b-input-group-append>
        </b-input-group>
        <div class="gif-container" :class="[gifs.length > 0 ? 'mt-4 mb-4' : '']">
            <ul>
                <li v-for="gif in gifs" :key="gif.id">
                    <img :src="gif.images.original.url" :alt="gif.title"/>
                </li>
            </ul>
        </div>

        <div class="text-center m-4" v-if="isLoader">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
        </div>
        <base-button size="lg" theme="info" @click='showMore()' class="m-auto d-flex">Show More</base-button>
        <p v-if="error" class="text-danger text-center mt-2">{{ error }}</p>
    </b-container>
</template>

<script>
import axiosInstance from '@/api/index.js';

export default {
    name: 'view-results',
    data() {
        return {
            searchTerm: "",
            apiKey: "P8OxZ5mQFHsmPtzyuMwOv51nEABwyL0U",
            limit: 5,
            gifs: [],
            error: '',
            isLoader: false,
        };
    },
    methods: {
        getGifs() {
            this.isLoader = true;
            axiosInstance.get(`&api_key=${this.apiKey}&q=${this.searchTerm}&limit=${this.limit}`)
            .then(response => {
                (
                    this.gifs = response.data.data
                )
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.isLoader = false;
            });
        },
        showMore() {
            if(this.gifs.length > 0) {
                this.getGifs(this.limit += 5);
            } else if (this && this.gifs.length === 0) {
                return this.error = 'Need add Text and click on `Search` button!';
            }
            return this.error = '';
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
