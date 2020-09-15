<template>
<v-list-item

      ripple
      :href="link"
      target="blank"
      light
      >

        <span class="ml-5" style="width : 10px;font-size: 12px;">{{id}}</span>
        <v-list-item-avatar rounded class="ml-5">
          <v-img  :src="cover"></v-img>
        </v-list-item-avatar>

        <v-list-item-content class="ml-5">
          <v-list-item-title>{{title}}</v-list-item-title>

          <v-list-item-subtitle v-if="$vuetify.breakpoint.xs">
           {{plays | threeDigits}}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-spacer v-if="!$vuetify.breakpoint.xs"></v-spacer>

        <span class="text-body-2" v-if="!$vuetify.breakpoint.xs">{{plays | threeDigits}}</span>
        <v-spacer></v-spacer>
        <span class="mr-5 text-body-2">{{duration | secondsToDate}}</span>
      </v-list-item>
</template>


<script>
export default {
    props : ['cover','title','plays','duration','link','id'],
    filters : {
        threeDigits : (value) =>{
            value = +value;
            return value.toLocaleString('en-EN');
        } ,
        secondsToDate : (value) => {
            return new Date(+value).toISOString().substr(14, 5)
        }
    }
}
</script>

<style>
.ml-5.v-avatar.v-list-item__avatar {
  top: -10px;
  left: 0px;
  border: 2px solid white;
  margin: 0 10px 0 11px !important;
}

.v-application .ml-5 {
  margin-left: 2px !important;
}

a.v-list-item {
  height: 30px;
  margin-bottom: 14px !important;
  /*padding: 0 !important;*/
  box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.3);
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  background: linear-gradient(rgb(250 250 250), rgb(236, 240, 241)) rgb(236, 240, 241);
}
</style>
