<template>
    <div>
        <ul>
            <li v-for="item in films" :key="item.id">{{item.name}}
                <img :src="item.cover.origin" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            films:[]
        }
    },
    created(){
        this.$http.get("/v4/api/film/now-playing",{
            params:{
                __t:Date.now(),
                page:1,
                count:10
            }
        }).then((res)=>{
            console.log(res);
            this.films=res.data.data.films;
        })
    }
}
</script>

<style>

</style>
