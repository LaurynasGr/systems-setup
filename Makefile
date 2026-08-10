.PHONY:
help:
	@echo Tasks:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# DEVELOPMENT SETUP
dev: ## Run development server
	bun run dev

build: ## Build application
	bun run build

start: ## Start application
	bun run start

# Misc tasks
clean-files: ## Remove all generated files
	rm -rf node_modules dist && \
		bun i

optimize-images: ## Convert assets/apps PNGs to optimized WebP in src/assets/apps
	bun scripts/optimize-images.ts

# Code quality
lint: ## Run linters
	bun run lint

lint-fix: ## Fix linting issues
	bun run lint:fix
