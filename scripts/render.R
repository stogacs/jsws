#!/usr/bin/env Rscript
initial_options <- commandArgs(trailingOnly = FALSE)
scriptdir <- dirname(sub("--file=", "",
                         initial_options[grep("--file=", initial_options)]))

setwd(file.path(scriptdir, ".."))
source(".Rprofile")

tmpdir <- Sys.getenv("TMP_DIR")
distdir <- Sys.getenv("DIST_DIR")
rmarkdown::render(file.path(tmpdir, "index.Rmd"),
                  "revealjs::revealjs_presentation",
                  output_file = file.path(distdir, "index.html"))
