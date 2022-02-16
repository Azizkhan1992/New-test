<template>
    <div>

    <v-navigation-drawer
    v-model="toggle"
    app
    clipped
    >
    <v-list dense>

        <v-list-item>
            <v-list-item-action>
                <v-icon
                large
                color="orange darken-2"
                >mdi-view-dashboard</v-icon>
            </v-list-item-action>

            <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item to="/admin/blog">
        <v-list-item-action>
            <v-icon
            large
            color="orange darken-2"
            >mdi-newspaper</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title>Categories</v-list-item-title>
        </v-list-item-content>
        </v-list-item>

        <!-- <v-list-item>
            <v-list-item-action>
                <v-icon
                large
                color="orange darken-2"
                >mdi-arrow-up-bold-box-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Club News</v-list-item-title>
            </v-list-item-content>
        </v-list-item> -->

         <v-list-item to="/admin/product">
            <v-list-item-action>
                <v-icon
                large
                color="orange darken-2"
                >mdi-arrow-up-bold-box-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Products</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item to="/admin/customer">
        <v-list-item-action>
            <v-icon
            large
            color="orange darken-2"
            >mdi-newspaper</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title>Customers</v-list-item-title>
        </v-list-item-content>
        </v-list-item>
    </v-list>

    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'main-menu',
    props:{
        toggle:{
            type: Boolean,
            default: true
        }
    }
}
</script>