<template>
    <div class="container">
        <div class="container-tool">
            <h1>My Tools App</h1>
            <div class="tools">
                <div class="tool-box">
                    <h3>GRADIENT Generator</h3>
                    <router-link to="/GradientGenerator">
                        <button class="btn">Go</button>
                    </router-link>
                </div>
                <div class="tool-box">
                    <h3>Tool 2</h3>
                    <button class="btn">Go</button>
                </div>
            </div>
        </div>
        <div class="bg-space">
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
        </div>
    </div>
</template>


<style scoped>
@import '/src/assets/style.css';
</style>