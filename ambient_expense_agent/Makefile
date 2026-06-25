.PHONY: install playground

install:
	python -m venv .venv
	.\.venv\Scripts\pip install -e .

playground:
	.\.venv\Scripts\adk.exe web .
