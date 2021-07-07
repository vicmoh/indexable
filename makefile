all: package-pull lint-check build sure

# Git pull the submodule packages.
package-pull:
	git pull --recurse-submodule
	git submodule update --recursive --remote

# Compile and build.
build:
	npm run build

# Commit to Git.
m=[AUTO]
git: all
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
