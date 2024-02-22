<template>
    <router-link class="to-home" :to="{ path: '/' }">
        <div class="logo-block">
            <img src="/assets/Icons/MainIcon.ico" alt="Logo" />
            <div class="textbox">
                <h1>Sneakers Shop</h1>
                <p>Best sneakers store</p>
            </div>
        </div>
    </router-link>
</template>
<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.to-home {
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    .logo-block {
        height: fit-content;
        display: flex;

        .textbox {
            color: $main-body-color;

            h1 {
                font-family: 'Anta', sans-serif;
                font-weight: 400;
            }

            p {
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
            }
        }
    }
}
</style>
