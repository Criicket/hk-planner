#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Starting Karma Server (http://karma-runner.github.io)"
echo "-------------------------------------------------------------------"

export CHROME_BIN="c:/Program Files (x86)/Google/Chrome/Application/chrome.exe"

karma start $BASE_DIR/../config/karma.conf.js $*
