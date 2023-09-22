<script>
import AppHero from "./AppHero.vue";
import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppHero,
    Section1,
    Section2,
    Section3,
  },
};
</script>

<template>
  <AppHero></AppHero>
  <Section1></Section1>
  <Section2></Section2>
  <Section3></Section3>
</template>

<style lang="scss" scoped></style>
