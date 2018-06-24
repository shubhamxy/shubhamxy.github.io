# Makefile 

all:
	bundle exec jekyll serve --host=0.0.0.0

install: clean depend build-search build 

build: 
	script/cibuild 

build-search:
	script/build-search

depend: 
	script/depend

version: backup-files
	script/vcs

archive: clean
	script/backup

clean:
	rm -rf .sass-cache _site