<template>
	<v-app>
		<v-menu/>

		<app-toolbar/>

		<v-content>
			<v-carousel></v-carousel>
		</v-content>

	<v-footer/>
	</v-app>
</template>

<script>
import Footer from './Footer'
import Carousel from './Carousel'
import Menu from './Menu'
import Toolbar from './Toolbar'

export default {
	components: { 'v-footer': Footer, 'v-carousel': Carousel, 'v-menu': Menu, 'app-toolbar': Toolbar},
	data() {
		return {
			itensMenu: [
				{titulo: 'Início', icon: 'dashboard'},
				{titulo: 'Sobre', icon: 'question_answer'}
			],
			fotos: [
				{src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
			]
		}
	}
}
</script>
