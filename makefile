all: lint-check build sure

# Compile and build.
build:
	npm run build

# Commit to Git.
m=[AUTO]
git:
	git add -A
	git commit -m '$(m)'
	git push

# Checkes if it passes
# the test harnesses.
sure:
	jest

# Linter check.
lint-check:
	npm run lint
