<template>
    <header>
        <div class="header-wrapper">
            <LogoComponent />
            <MenuComponent />
            <ControlComponent />
        </div>
    </header>
</template>
<script setup>
import LogoComponent from './Modules/LogoComponent.vue'
import MenuComponent from './Modules/MenuComponent.vue'
import ControlComponent from './Modules/ControlComponent.vue'
</script>
<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

header {
    width: 100vw;
    height: 72px;
    background-color: #fff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 0 60px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;

    .header-wrapper {
        width: 100%;
        height: 100%;
        max-width: 1140px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>