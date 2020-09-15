<template>


  <popular-list/>

</template>

<script>
import popularList from './popularList';

export default {
  components : {
     popularList,
  }
}
</script>
<style lang="scss">
.v-responsive__sizer {
  background: #ffffff5e;
}
@mixin for-phone-only {
  @media (max-width: 599px) { @content; }
}
@mixin for-tablet-portrait-up {
  @media (min-width: 600px) { @content; }
}
@mixin for-tablet-landscape-up {
  @media (min-width: 900px) { @content; }
}
@mixin for-desktop-up {
  @media (min-width: 1200px) { @content; }
}
@mixin for-big-desktop-up {
  @media (min-width: 1800px) { @content; }
}
.v-toolbar--prominent:not(.v-toolbar--bottom) .v-toolbar__title h3 {
  @include for-phone-only {
    font-size: 18px;
  }
}

</style>
