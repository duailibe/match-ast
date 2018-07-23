.PHONY: build test

SRC = $(filter-out src/generated.js,$(wildcard src/*.js))
GENERATED = src/generated.js
DIST = index.js

build: $(DIST)

$(DIST): $(GENERATED)
	./node_modules/.bin/rollup $< -o $@ -f cjs

$(GENERATED): scripts/codegen.js $(SRC) yarn.lock
	node scripts/codegen.js $@

check-diff: $(GENERATED)
	@CHANGED=$$(git diff --name-only); \
	if [ -n "$${CHANGED}" ]; then \
		echo "Generated is out of sync"; \
		exit 1; \
	fi

test: build
	./node_modules/.bin/jest

lint:
	./node_modules/.bin/eslint .
	./node_modules/.bin/prettier --list-different README.md
