<template>
    <v-container class="container">
        <div class="container-tool">
            <h1>My Tools App</h1>
            <div class="tools">
                <div class="tool-box">
                    <v-icon start size="40">mdi-gradient-horizontal</v-icon> 
                    <h3>GRADIENT Generator</h3>
                    <v-btn :to="'/GradientGenerator'" class="btn" size="large" variant="elevated">Go</v-btn>
                </div>
                <div class="tool-box">
                    <h3>Tool 2</h3>
                    <button class="btn">Go</button>
                </div>
            </div>
        </div>
        <v-responsive class="bg-space">
            <ul class="squares">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </v-responsive>
    </v-container>
</template>


<style scoped>
@import '/src/assets/style.css';
</style>