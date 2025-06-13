install:
	make -C NDM_front install

lint:
	make -C NDM_front lint

start:
	make -C NDM_front start

build:
	make -C NDM_front build

test:
	make -C NDM_front test

test-ui:
	make -C NDM_front test-ui
