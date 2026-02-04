#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-explorer-212386-212405/frontend_react_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

