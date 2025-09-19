#!/bin/bash
cd /home/kavia/workspace/code-generation/tic-tac-toe-digital-game-54804-54878/frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

