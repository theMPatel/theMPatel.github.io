.PHONY: all
all:

deploy:
	${PROJECT_ROOT}/tools/deploy.sh

clean:
	rm -f ${PROJECT_ROOT}/dist/*