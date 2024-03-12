<template>
    <div class="control-block">
        <div class="language-picker">
            <select>
                <option value="ua">UA</option>
                <option value="en">EN</option>
            </select>
        </div>
        <router-link :to="{ name: 'Profile' }">Profile</router-link>
    </div>
</template>
<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.control-block {
    display: flex;
    align-items: center;
    gap: 24px;

    a {
        @include ordinary-text;
        color: $main-body-color;
        text-decoration: none;
        transition: all 0.3s ease;
        font-family: "Anta",
            sans-serif;

        &:hover {
            color: #7d828f;
        }
    }

    .language-picker {
        position: relative;

        select {
            @include ordinary-text;
            color: $main-body-color;
            font-family: "Anta",
                sans-serif;
            background-color: transparent;
            border: none;
            cursor: pointer;

            &:focus-visible {
                outline: none;
            }

            option {
                color: $main-body-color;
                font-family: "Anta",
                    sans-serif;

            }
        }
    }
}
</style>