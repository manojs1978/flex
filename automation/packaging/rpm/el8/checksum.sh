#!/bin/bash

VERSION=$(echo "%VERSION%" | awk -F '-' {'print $1'})
REL=$(echo "%VERSION%" | sed "s/^${VERSION}//g" | sed "s/^-//g")
if [ -z "$REL" ]; then
        RELEASE="el8"
else
        RELEASE="$REL.el8"
fi
pushd rpmbuild/RPMS/x86_64
sha256sum flex-$VERSION-$RELEASE-x86_64.rpm > flex-$VERSION-$RELEASE.x86_64.rpm.sha256sum
popd
