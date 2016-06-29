#!/usr/bin/env bash

_dir=$(dirname $0)

echo ${_dir}

node ${_dir}/../lib/bin.js ${_dir}/in.json /tmp/cleanShrinkwrap.test.json

_in=$(cat /tmp/cleanShrinkwrap.test.json)
_out=$(cat ${_dir}/out.json)
rm -f /tmp/cleanShrinkwrap.test.json

if [ "${_in}" == "${_out}" ]; then
  exit 0
fi

exit 1
