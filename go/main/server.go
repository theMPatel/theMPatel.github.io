package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
)

var (
	serveDir = flag.String("serve", "", "the directory to serve")
)


func main() {
	flag.Parse()
	if *serveDir == "" {
		panic("provide a directory to serve")
	} else if _, err := os.Stat(*serveDir); err != nil {
		if os.IsNotExist(err) {
			panic(fmt.Sprintf("%s does not exist: %s\n", *serveDir, err))
		}
		panic(err)
	}

	fs := http.FileServer(http.Dir(*serveDir))
	http.Handle("/", fs)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}