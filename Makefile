# Define variables
SRC_DIR = src
BUILD_DIR = build
DOCKER_IMAGE_NAME = my_js_app

# Define files to lint and format
JS_FILES = $(wildcard $(SRC_DIR)/*.js)

# Define targets
lint:
	@echo "Linting JavaScript files..."
	@eslint $(JS_FILES)
	@echo "Formatting JavaScript files..."
	@prettier --write $(JS_FILES)

build: $(BUILD_DIR)
	@echo "Building the project..."
	# Add your build commands here

$(BUILD_DIR):
	@mkdir -p $(BUILD_DIR)

docker-build: build
	@echo "Building Docker image..."
	@docker build -t $(DOCKER_IMAGE_NAME) .

docker-run:
	@echo "Running Docker container..."
	@docker run -p 8080:80 $(DOCKER_IMAGE_NAME)

clean:
	@echo "Cleaning up..."
	@rm -rf $(BUILD_DIR)

# Define the default target
.PHONY: all
all: lint format build docker-build docker-run

# Remove built files and Docker image
clean-all: clean
	@echo "Removing Docker image..."
	@docker rmi $(DOCKER_IMAGE_NAME)

# Help target to display available targets
help:
	@echo "Available targets:"
	@awk '/^[a-zA-Z\-\_0-9]+:/ { \
		print "  - " substr($$1, 1, length($$1)-1) ": " $$0; \
	} \
	/^#.*$$/ { \
		print "    " substr($$0, 2); \
	}' $(MAKEFILE_LIST)

# Ensure that targets are not treated as file names
.PHONY: lint format build docker-build docker-run clean clean-all help
