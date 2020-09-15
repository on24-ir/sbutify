<template>
    <v-card class="ma-3" color="#ecf0f1" :href="link" target="_blank" flat>
        <v-img :src="cover">
        </v-img>
        <v-card-title>
            {{title}}
        </v-card-title>

        <v-card-subtitle>
            {{singer}}
        </v-card-subtitle>
    </v-card>
</template>

<script>
export default {
    props : ['cover','title','singer','link'],
}
</script>
