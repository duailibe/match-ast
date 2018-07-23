.PHONY: build test

SRC = $(addprefix src/,builtins.js match.js)
GENERATED = src/generated.js

build: index.js

index.js: $(GENERATED)
	./node_modules/.bin/rollup -o $@ -f cjs $<

$(GENERATED): scripts/codegen.js $(SRC)
	node $< $@

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
