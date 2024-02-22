<template>
    <nav class="menu-block">
        <ul>
            <li><button class="shopping-basket">100 грн.</button></li>
            <li><router-link :to="{ name: 'Favorites' }">Favorite</router-link></li>
            <li><router-link :to="{ name: 'About' }">About</router-link></li>
            <li><button class="contacts">Contacts</button></li>
            <li><router-link :to="{ name: 'Blog' }">Blog</router-link></li>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.menu-block {
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        gap: 24px;

        li {
            list-style: none;

            button,
            a {
                cursor: pointer;
                @include ordinary-text;
                text-decoration: none;
                background: none;
            }
        }
    }
}
</style>
