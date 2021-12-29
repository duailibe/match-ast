.PHONY: build test

SRC = $(filter-out src/generated.js,$(wildcard src/*.js))
GENERATED = src/generated.js
DIST = index.js

build: $(DIST)

$(DIST): $(GENERATED)
	./node_modules/.bin/rollup $< -o $@ -f cjs

$(GENERATED): scripts/codegen.js $(SRC) yarn.lock
	node scripts/codegen.js $@
