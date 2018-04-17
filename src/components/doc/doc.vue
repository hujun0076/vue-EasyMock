<template>
  <div class="container">
    <pro-header title="文档" :item-nav-show="false" icon-type="icon-msnui-help-doc">
      <p slot="description">
        阅读文档能使你完全掌握 Easy Mock 的使用。。
      </p>
    </pro-header>
    <doc-nav></doc-nav>
    <doc-content></doc-content>
  </div>
</template>

<script>
  import ProHeader from '@/components/project/header/pro-header'
  import DocNav from '@/components/doc/doc-nav'
  import DocContent from '@/components/doc/doc-content'
  export default {
    name: "doc",
    components: {
      ProHeader,
      DocNav,
      DocContent
    }
  }
</script>

<style scoped>

</style>
