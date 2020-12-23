SERVER := $(GOPATH)/bin/server

dev:
	npm run build:dev

prod:
	npm run build:prod

serve: $(SERVER)
	server -serve ${SITE_ROOT}&

$(SERVER):
	cd go && go build -o go/bin/server website/main

deploy:
	${PROJECT_ROOT}/tools/deploy.sh

clean:
	rm -f ${PROJECT_ROOT}/dist/*