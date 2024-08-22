test:
	docker run --rm -p 8080:8080 -v $$(pwd)/src:/app/src cyh834/vuepress-theme-hope npm run docs:dev