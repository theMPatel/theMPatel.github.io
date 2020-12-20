SERVER := $(GOPATH)/bin/server

serve: $(SERVER)
	server -serve ${SITE_ROOT}&

$(SERVER):
	cd go && go build -o go/bin/server website/main

deploy:
	${PROJECT_ROOT}/tools/deploy.sh

clean:
	rm -f ${PROJECT_ROOT}/dist/*